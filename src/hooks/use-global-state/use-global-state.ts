import { useCallback, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { TypeGlobalStateContextProps } from '@app/types'
import { EnumLanguageCode, EnumTabRoute, EnumTheme } from '@app/enums'
import { DEFAULT_TAB_ROUTE, INITIAL_APP_CONFIGURATION } from '@app/constants'

import { useEndpoints } from '../use-endpoints'

export const useGlobalState = (): TypeGlobalStateContextProps => {
	const { i18n } = useTranslation()
	const { useConfiguration, useUpdateConfiguration } = useEndpoints()
	const {
		data: configuration = INITIAL_APP_CONFIGURATION,
		isLoading: isConfigurationLoading,
	} = useConfiguration()
	const { mutateAsync: update, isLoading: isConfigurationUpdating } =
		useUpdateConfiguration()

	const [activeTab, setActiveTab] = useState<EnumTabRoute>(DEFAULT_TAB_ROUTE)

	const setTheme = useCallback(
		async (theme: EnumTheme) => {
			await update({
				...configuration,
				theme,
			})
		},
		[update, configuration],
	)

	const setLanguage = useCallback(
		async (language: EnumLanguageCode) => {
			await update({
				...configuration,
				language,
			})
		},
		[update, configuration],
	)

	const setIsUserAcceptAppDocs = useCallback(
		async (isUserAcceptAppDocs: boolean) => {
			await update({
				...configuration,
				isUserAcceptAppDocs,
			})
		},
		[update, configuration],
	)

	useEffect(() => {
		i18n.changeLanguage(configuration.language)
	}, [i18n, configuration.language])

	return {
		...configuration,

		isConfigurationLoading,
		isConfigurationUpdating,

		setTheme,
		setLanguage,
		setIsUserAcceptAppDocs,

		activeTab,
		setActiveTab,
	}
}
