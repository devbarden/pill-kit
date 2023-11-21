import { Dispatch, SetStateAction } from 'react'

import { I_Medicine, T_MedicineSortableField } from './medicine'
import { T_CardFilters } from './card'

export interface I_HistoryContextProps {
	searchValue: string
	setSearchValue: Dispatch<SetStateAction<string>>
	filters: T_CardFilters
	setFilters: Dispatch<SetStateAction<T_CardFilters>>
	medicines: I_Medicine[]
	isLoading: boolean
	sortType: T_MedicineSortableField
	setSortType: Dispatch<SetStateAction<T_MedicineSortableField>>
}
