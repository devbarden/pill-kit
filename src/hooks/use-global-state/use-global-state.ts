import { useState } from 'react'

import { TAB_ROUTES, DEFAULT_TAB_ROUTE } from '@app/constants'
import { I_GlobalStateContextProps } from '@app/types'

export const useGlobalState = (): I_GlobalStateContextProps => {
	const [activeTab, setActiveTab] = useState<TAB_ROUTES>(DEFAULT_TAB_ROUTE)

	return {
		activeTab,
		setActiveTab,
	}
}
