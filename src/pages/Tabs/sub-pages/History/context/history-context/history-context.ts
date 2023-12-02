import { createContext } from 'react'

import { TypeHistoryContextProps } from '@app/types'
import { INITIAL_HISTORY_FILTERS, INITIAL_CARD_SORT_TYPE } from '@app/constants'

export const HistoryContext = createContext<TypeHistoryContextProps>({
	sortModalRef: null,

	openSortModal: () => {},
	closeSortModal: () => {},

	searchValue: '',
	setSearchValue: () => {},

	filters: INITIAL_HISTORY_FILTERS,
	setFilters: () => {},

	sortType: INITIAL_CARD_SORT_TYPE,
	setSortType: () => {},

	medicines: [],
	isLoading: true,
})
