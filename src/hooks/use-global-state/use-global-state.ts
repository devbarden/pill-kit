import { useCallback, useState, useMemo } from 'react'
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
	const [isMedicineActionEnabled, setIsMedicineActionEnabled] = useState(true)

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

	return {
		...configuration,

		locale,
		activeTab,
		globalStyleProps,

		isLocaleRTL,
		isConfigurationLoading,
		isConfigurationUpdating,
		isMedicineActionEnabled,

		setTheme,
		setLocale,
		setActiveTab,
		setIsUserAcceptAppDocs,
		setIsMedicineActionEnabled,
	}
}
