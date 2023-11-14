import { Dispatch, SetStateAction } from 'react'

import { Medicine } from './medicine'

export interface HistoryFilters {
	active: boolean
	future: boolean
	past: boolean
}

export interface HistoryContextProps {
	searchValue: string
	setSearchValue: Dispatch<SetStateAction<string>>
	filters: HistoryFilters
	setFilters: Dispatch<SetStateAction<HistoryFilters>>
	filteredMedicines: Medicine[]
	isLoading: boolean
}
