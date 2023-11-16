import { Dispatch, SetStateAction } from 'react'

import { HISTORY_FILTER } from '@app/constants'

import { Medicine } from './medicine'

export type HistoryFilters = Record<HISTORY_FILTER, boolean>

export interface HistoryContextProps {
	searchValue: string
	setSearchValue: Dispatch<SetStateAction<string>>
	filters: HistoryFilters
	setFilters: Dispatch<SetStateAction<HistoryFilters>>
	medicines: Medicine[]
	isLoading: boolean
}
