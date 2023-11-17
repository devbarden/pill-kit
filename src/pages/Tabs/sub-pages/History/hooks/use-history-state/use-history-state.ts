import { useState, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { medicineUtils } from '@app/utils'
import { INITIAL_HISTORY_FILTERS } from '@app/constants'
import { CardFilters, HistoryContextProps } from '@app/types'

export const useHistoryState = (): HistoryContextProps => {
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const [searchValue, setSearchValue] = useState('')
	const [filters, setFilters] = useState<CardFilters>(INITIAL_HISTORY_FILTERS)

	const filteredMedicines = useMemo(
		() => medicineUtils.getMedicinesByFilters(allMedicines, filters),
		[allMedicines, filters],
	)

	const medicinesBySearchValue = useMemo(
		() =>
			medicineUtils.getMedicinesBySearchValue(filteredMedicines, searchValue),
		[filteredMedicines, searchValue],
	)

	const medicines = useMemo(
		() => medicineUtils.getSortedByEndDate(medicinesBySearchValue),
		[medicinesBySearchValue],
	)

	return {
		searchValue,
		setSearchValue,
		filters,
		setFilters,
		medicines,
		isLoading,
	}
}
