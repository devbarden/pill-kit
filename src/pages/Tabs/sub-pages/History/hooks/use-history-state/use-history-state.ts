import { useState, useMemo, useRef, useCallback } from 'react'

import { useEndpoints } from '@app/hooks'
import { medicineUtils } from '@app/utils'
import { INITIAL_CARD_SORT_TYPE, INITIAL_HISTORY_FILTERS } from '@app/constants'
import {
	TypeCardFilters,
	TypeModalHandlers,
	TypeHistoryContextProps,
	TypeMedicineSortableField,
} from '@app/typess'

export const useHistoryState = (): TypeHistoryContextProps => {
	const sortModalRef = useRef<TypeModalHandlers>(null)

	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const [searchValue, setSearchValue] = useState('')

	const [sortType, setSortType] = useState<TypeMedicineSortableField>(
		INITIAL_CARD_SORT_TYPE,
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

	const openSortModal = useCallback(() => {
		sortModalRef.current?.open()
	}, [])

	const closeSortModal = useCallback(() => {
		sortModalRef.current?.close()
	}, [])

	return {
		sortModalRef,

		openSortModal,
		closeSortModal,

		searchValue,
		setSearchValue,

		filters,
		setFilters,

		sortType,
		setSortType,

		medicines,
		isLoading,
	}
}
