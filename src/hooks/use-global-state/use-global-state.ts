import { useState } from 'react'

import { EnumTabRoute } from '@app/enums'
import { DEFAULT_TAB_ROUTE } from '@app/constants'
import { TypeGlobalStateContextProps } from '@app/typess'

export const useGlobalState = (): TypeGlobalStateContextProps => {
	const [activeTab, setActiveTab] = useState<EnumTabRoute>(DEFAULT_TAB_ROUTE)

	return {
		activeTab,
		setActiveTab,
	}
}
