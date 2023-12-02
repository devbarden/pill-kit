import { createContext } from 'react'

import { DEFAULT_TAB_ROUTE } from '@app/constants'
import { TypeGlobalStateContextProps } from '@app/typess'

export const GlobalStateContext = createContext<TypeGlobalStateContextProps>({
	activeTab: DEFAULT_TAB_ROUTE,
	setActiveTab: () => {},
})
