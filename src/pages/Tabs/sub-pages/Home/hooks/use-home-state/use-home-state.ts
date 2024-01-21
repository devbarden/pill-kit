import { useMemo, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { EnumStackRoute } from '@app/enums'
import { HOME_FILTERS } from '@app/constants'
import { TypeHomeContextProps } from '@app/types'
import { isDeserted, medicineUtils } from '@app/utils'

export const useHomeState = (): TypeHomeContextProps => {
	const { navigate } = useNavigation()
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const filteredMedicines = useMemo(
		() => medicineUtils.getMedicinesByFilters(allMedicines, HOME_FILTERS),
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
