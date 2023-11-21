import { Dispatch, SetStateAction } from 'react'

import { TAB_ROUTES } from '@app/constants'

export interface GlobalStateContextProps {
	activeTab: TAB_ROUTES
	setActiveTab: Dispatch<SetStateAction<TAB_ROUTES>>
}
