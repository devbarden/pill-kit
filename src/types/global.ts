import { Dispatch, SetStateAction } from 'react'

import { EnumTheme, EnumTabRoute } from '@app/enums'

import { TypeGlobalStyleProps } from './style'
import { TypeConfiguration } from './configuration'

export type TypeGlobalStateContextProps = TypeConfiguration & {
	locale: string
	activeTab: EnumTabRoute
	globalStyleProps: TypeGlobalStyleProps

	isLocaleRTL: boolean
	isConfigurationLoading: boolean
	isConfigurationUpdating: boolean
	isMedicineActionEnabled: boolean

	setTheme: (theme: EnumTheme) => void
	setLocale: (locale: string) => void
	setActiveTab: Dispatch<SetStateAction<EnumTabRoute>>
	setIsUserAcceptAppDocs: (isUserAcceptAppDocs: boolean) => void
	setIsMedicineActionEnabled: Dispatch<SetStateAction<boolean>>
}
