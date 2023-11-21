import { Dispatch, SetStateAction } from 'react'

import { EnumTabRoute } from '@app/enums'

export type TypeGlobalStateContextProps = {
	activeTab: EnumTabRoute
	setActiveTab: Dispatch<SetStateAction<EnumTabRoute>>
}
