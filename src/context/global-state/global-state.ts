import { createContext } from 'react'

import { DEFAULT_TAB_ROUTE } from '@app/constants'
import { I_GlobalStateContextProps } from '@app/types'

export const GlobalStateContext = createContext<I_GlobalStateContextProps>({
	activeTab: DEFAULT_TAB_ROUTE,
	setActiveTab: () => {},
})
