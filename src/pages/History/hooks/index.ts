import { useState, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { HistoryContextProps, HistoryFilters } from '@app/types'

export const useHistoryState = (): HistoryContextProps => {
	const { useMedicines } = useEndpoints()
	const { data: medicines = [], isLoading } = useMedicines()

	const [searchValue, setSearchValue] = useState('')
	const [filters, setFilters] = useState<HistoryFilters>({
		active: true,
		future: true,
		past: true,
	})

	// TODO: filtering by filters + sorting
	const filteredMedicines = useMemo(
		() =>
			searchValue
				? medicines.filter(({ name }) =>
						name.toLowerCase().includes(searchValue.toLowerCase()),
				  )
				: medicines,
		[medicines, searchValue],
	)

	return {
		searchValue,
		setSearchValue,
		filters,
		setFilters,
		filteredMedicines,
		isLoading,
	}
}
