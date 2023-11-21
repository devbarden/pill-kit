import { useState, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { medicineUtils } from '@app/utils'
import { CARD_SORT_TYPE, INITIAL_HISTORY_FILTERS } from '@app/constants'
import {
	T_CardFilters,
	I_HistoryContextProps,
	T_MedicineSortableField,
} from '@app/types'

export const useHistoryState = (): I_HistoryContextProps => {
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const [searchValue, setSearchValue] = useState('')
	const [sortType, setSortType] = useState<T_MedicineSortableField>(
		CARD_SORT_TYPE.END_DATE,
	)
	const [filters, setFilters] = useState<T_CardFilters>(INITIAL_HISTORY_FILTERS)

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
		() => medicineUtils.getSortedBy(medicinesBySearchValue, sortType),
		[medicinesBySearchValue, sortType],
	)

	return {
		searchValue,
		setSearchValue,
		filters,
		setFilters,
		medicines,
		isLoading,
		sortType,
		setSortType,
	}
}
