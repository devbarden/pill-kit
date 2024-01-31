import { Dispatch, SetStateAction } from 'react'
import { Animated } from 'react-native'

import { EnumTheme, EnumTabRoute } from '@app/enums'

import { TypeConfiguration } from './configuration'

export type TypeGlobalStateContextProps = TypeConfiguration & {
	isConfigurationLoading: boolean
	isConfigurationUpdating: boolean

	setTheme: (theme: EnumTheme) => void
	setLanguage: (language: string) => void
	setIsUserAcceptAppDocs: (isUserAcceptAppDocs: boolean) => void

	activeTab: EnumTabRoute
	setActiveTab: Dispatch<SetStateAction<EnumTabRoute>>

	opacity: Animated.Value
}
