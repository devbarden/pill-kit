import { useState, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { medicineUtils } from '@app/utils'
import { CARD_SORT_TYPE, INITIAL_HISTORY_FILTERS } from '@app/constants'
import {
	TypeCardFilters,
	TypeHistoryContextProps,
	TypeMedicineSortableField,
} from '@app/types'

export const useHistoryState = (): TypeHistoryContextProps => {
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const [searchValue, setSearchValue] = useState('')
	const [sortType, setSortType] = useState<TypeMedicineSortableField>(
		CARD_SORT_TYPE.END_DATE,
	)
	const [filters, setFilters] = useState<TypeCardFilters>(
		INITIAL_HISTORY_FILTERS,
	)

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
