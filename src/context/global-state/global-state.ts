import { createContext } from 'react'

import { DEFAULT_TAB_ROUTE } from '@app/constants'
import { GlobalStateContextProps } from '@app/types'

export const GlobalStateContext = createContext<GlobalStateContextProps>({
	activeTab: DEFAULT_TAB_ROUTE,
	setActiveTab: () => {},
})
