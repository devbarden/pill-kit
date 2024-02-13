import { createContext } from 'react'

import { EnumTheme } from '@app/enums'
import { TypeGlobalStateContextProps } from '@app/types'
import {
	DEFAULT_TAB_ROUTE,
	FALLBACK_LANGUAGE_CODE,
	INITIAL_APP_CONFIGURATION,
} from '@app/constants'

export const GlobalStateContext = createContext<TypeGlobalStateContextProps>({
	...INITIAL_APP_CONFIGURATION,

	locale: FALLBACK_LANGUAGE_CODE,
	activeTab: DEFAULT_TAB_ROUTE,
	globalStyleProps: {
		theme: EnumTheme.light,
		isLocaleRTL: false,
	},

	isLocaleRTL: false,
	isConfigurationLoading: true,
	isConfigurationUpdating: false,
	isMedicineActionEnabled: true,

	setTheme: () => {},
	setLocale: () => {},
	setActiveTab: () => {},
	setIsUserAcceptAppDocs: () => {},
	setIsMedicineActionEnabled: () => {},
})
