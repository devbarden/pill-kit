import { Dispatch, SetStateAction } from 'react'

import { EnumLanguageCode, EnumTabRoute, EnumTheme } from '@app/enums'

import { TypeConfiguration } from './configuration'

export type TypeGlobalStateContextProps = TypeConfiguration & {
	isConfigurationLoading: boolean
	isConfigurationUpdating: boolean

	setTheme: (theme: EnumTheme) => void
	setLanguage: (language: EnumLanguageCode) => void
	setIsUserAcceptAppDocs: (isUserAcceptAppDocs: boolean) => void

	activeTab: EnumTabRoute
	setActiveTab: Dispatch<SetStateAction<EnumTabRoute>>
}
