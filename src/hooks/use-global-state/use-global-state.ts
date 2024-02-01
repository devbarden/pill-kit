import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useState, useMemo, useEffect } from 'react'
import { Animated } from 'react-native'
import { useTranslation } from 'react-i18next'

import { EnumTabRoute, EnumTheme } from '@app/enums'
import { TypeGlobalStateContextProps } from '@app/types'
import { DEFAULT_TAB_ROUTE, INITIAL_APP_CONFIGURATION } from '@app/constants'

import { useEndpoints } from '../use-endpoints'

export const useGlobalState = (): TypeGlobalStateContextProps => {
	const { i18n } = useTranslation()
	const {
		useConfiguration,
		useUpdateConfiguration,
		useUpdateNotificationsByLanguage,
	} = useEndpoints()
	const {
		data: configuration = INITIAL_APP_CONFIGURATION,
		isLoading: isConfigurationLoading,
	} = useConfiguration()
	const { mutateAsync: updateNotificationsByLanguage } =
		useUpdateNotificationsByLanguage()
	const {
		mutateAsync: updateConfiguration,
		isLoading: isConfigurationUpdating,
	} = useUpdateConfiguration()

	const [activeTab, setActiveTab] = useState<EnumTabRoute>(DEFAULT_TAB_ROUTE)

	const opacity = useMemo(() => new Animated.Value(0), [])

	const setTheme = useCallback(
		async (theme: EnumTheme) => {
			await updateConfiguration({
				...configuration,
				theme,
			})
		},
		[updateConfiguration, configuration],
	)

	const setLanguage = useCallback(
		async (language: string) => {
			await i18n.changeLanguage(language)
			await updateNotificationsByLanguage()
		},
		[i18n, updateNotificationsByLanguage],
	)

	const setIsUserAcceptAppDocs = useCallback(
		async (isUserAcceptAppDocs: boolean) => {
			await updateConfiguration({
				...configuration,
				isUserAcceptAppDocs,
			})
		},
		[updateConfiguration, configuration],
	)

	const hideSplashScreen = useCallback(async () => {
		if (!isConfigurationLoading) {
			await SplashScreen.hideAsync()

			Animated.timing(opacity, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true,
			}).start()
		}
	}, [isConfigurationLoading, opacity])

	useEffect(() => {
		hideSplashScreen()
	}, [hideSplashScreen])

	return {
		...configuration,

		isConfigurationLoading,
		isConfigurationUpdating,

		setTheme,
		setLanguage,
		setIsUserAcceptAppDocs,

		activeTab,
		setActiveTab,

		opacity,
	}
}
