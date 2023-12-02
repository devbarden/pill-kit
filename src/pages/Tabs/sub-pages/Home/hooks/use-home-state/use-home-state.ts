import { useMemo, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { EnumStackRoute } from '@app/enums'
import { TypeHomeContextProps } from '@app/typess'
import { isDeserted, medicineUtils } from '@app/utils'
import { INITIAL_CARD_SORT_TYPE, INITIAL_HOME_FILTERS } from '@app/constants'

export const useHomeState = (): TypeHomeContextProps => {
	const { navigate } = useNavigation()
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const filteredMedicines = useMemo(
		() =>
			medicineUtils.getMedicinesByFilters(allMedicines, INITIAL_HOME_FILTERS),
		[allMedicines],
	)

	const sortedMedicines = useMemo(
		() => medicineUtils.getSortedBy(filteredMedicines, INITIAL_CARD_SORT_TYPE),
		[filteredMedicines],
	)

	const isNoMedicines = useMemo(
		() => isDeserted(sortedMedicines),
		[sortedMedicines],
	)

	const addNewMedicineHandler = useCallback(() => {
		navigate(EnumStackRoute.createMedicine)
	}, [navigate])

	return {
		medicines: sortedMedicines,
		isLoading,

		isNoMedicines,

		addNewMedicineHandler,
	}
}
