import { createContext } from 'react'

import { HistoryContextProps } from '@app/types'

export const HistoryContext = createContext<HistoryContextProps>({
	searchValue: 'string',
	setSearchValue: () => {},
	filters: {
		active: true,
		future: true,
		past: true,
	},
	setFilters: () => {},
	filteredMedicines: [],
	isLoading: true,
})
