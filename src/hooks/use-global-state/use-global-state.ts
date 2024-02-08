import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useState, useMemo, useEffect } from 'react'
import { Animated } from 'react-native'
import { useTranslation } from 'react-i18next'

import { isRTL } from '@app/utils'
import { EnumLanguageCode, EnumTabRoute, EnumTheme } from '@app/enums'
import { TypeGlobalStateContextProps, TypeGlobalStyleProps } from '@app/types'
import {
	DEFAULT_TAB_ROUTE,
	ARABIC_NUMBER_CODE,
	INITIAL_APP_CONFIGURATION,
} from '@app/constants'

import { useEndpoints } from '../use-endpoints'

export const useGlobalState = (): TypeGlobalStateContextProps => {
	const { i18n } = useTranslation()
	const { useConfiguration, useUpdateConfiguration } = useEndpoints()
	const {
		data: configuration = INITIAL_APP_CONFIGURATION,
		isLoading: isConfigurationLoading,
	} = useConfiguration()
	const {
		mutateAsync: updateConfiguration,
		isLoading: isConfigurationUpdating,
	} = useUpdateConfiguration()

	const [activeTab, setActiveTab] = useState<EnumTabRoute>(DEFAULT_TAB_ROUTE)

	const opacity = useMemo(() => new Animated.Value(0), [])

	const locale = useMemo(() => {
		if (i18n.language.includes(EnumLanguageCode.ar)) {
			return ARABIC_NUMBER_CODE
		}

		return i18n.language.substring(0, 2)
	}, [i18n.language])

	const isLocaleRTL = useMemo(() => isRTL(locale), [locale])

	const globalStyleProps: TypeGlobalStyleProps = useMemo(
		() => ({
			theme: configuration.theme,
			isLocaleRTL,
		}),
		[configuration.theme, isLocaleRTL],
	)

	const setTheme = useCallback(
		async (theme: EnumTheme) => {
			await updateConfiguration({
				...configuration,
				theme,
			})
		},
		[updateConfiguration, configuration],
	)

	const setLocale = useCallback(
		async (locale: string) => {
			await i18n.changeLanguage(locale)
		},
		[i18n],
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

		locale,
		opacity,
		activeTab,
		globalStyleProps,

		isLocaleRTL,
		isConfigurationLoading,
		isConfigurationUpdating,

		setTheme,
		setLocale,
		setActiveTab,
		setIsUserAcceptAppDocs,
	}
}
