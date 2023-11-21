import { createContext } from 'react'

import { I_HistoryContextProps } from '@app/types'
import { INITIAL_HISTORY_FILTERS, CARD_SORT_TYPE } from '@app/constants'

export const HistoryContext = createContext<I_HistoryContextProps>({
	searchValue: 'string',
	setSearchValue: () => {},
	filters: INITIAL_HISTORY_FILTERS,
	setFilters: () => {},
	medicines: [],
	isLoading: true,
	sortType: CARD_SORT_TYPE.END_DATE,
	setSortType: () => {},
})
