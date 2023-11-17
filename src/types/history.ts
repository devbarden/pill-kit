import { Dispatch, SetStateAction } from 'react'

import { Medicine, MedicineSortableField } from './medicine'
import { CardFilters } from './card'

export interface HistoryContextProps {
	searchValue: string
	setSearchValue: Dispatch<SetStateAction<string>>
	filters: CardFilters
	setFilters: Dispatch<SetStateAction<CardFilters>>
	medicines: Medicine[]
	isLoading: boolean
	sortType: MedicineSortableField
	setSortType: Dispatch<SetStateAction<MedicineSortableField>>
}
