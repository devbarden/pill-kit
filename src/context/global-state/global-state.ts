import { createContext } from 'react'

import { TypeGlobalStateContextProps } from '@app/types'
import { DEFAULT_TAB_ROUTE, INITIAL_APP_CONFIGURATION } from '@app/constants'

export const GlobalStateContext = createContext<TypeGlobalStateContextProps>({
	...INITIAL_APP_CONFIGURATION,

	isConfigurationLoading: true,
	isConfigurationUpdating: false,

	setTheme: () => {},
	setLanguage: () => {},
	setIsUserAcceptAppDocs: () => {},

	activeTab: DEFAULT_TAB_ROUTE,
	setActiveTab: () => {},
})
