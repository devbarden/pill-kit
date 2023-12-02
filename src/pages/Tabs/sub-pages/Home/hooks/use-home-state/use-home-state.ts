import { useMemo, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { EnumStackRoute } from '@app/enums'
import { TypeHomeContextProps } from '@app/types'
import { INITIAL_HOME_FILTERS } from '@app/constants'
import { isDeserted, medicineUtils } from '@app/utils'

export const useHomeState = (): TypeHomeContextProps => {
	const { navigate } = useNavigation()
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const filteredMedicines = useMemo(
		() =>
			medicineUtils.getMedicinesByFilters(allMedicines, INITIAL_HOME_FILTERS),
		[allMedicines],
	)

	const isNoMedicines = useMemo(
		() => isDeserted(filteredMedicines),
		[filteredMedicines],
	)

	const addNewMedicineHandler = useCallback(() => {
		navigate(EnumStackRoute.createMedicine)
	}, [navigate])

	return {
		medicines: filteredMedicines,
		isLoading,

		isNoMedicines,

		addNewMedicineHandler,
	}
}
