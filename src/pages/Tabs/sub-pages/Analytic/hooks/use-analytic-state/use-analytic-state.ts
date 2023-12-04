import { useMemo } from 'react'
import { Dimensions } from 'react-native'

import { useEndpoints } from '@app/hooks'
import { TypeAnalyticContextProps } from '@app/types'
import { isDeserted, medicineUtils } from '@app/utils'
import { ANALYTIC_FILTERS_OF_ACTIVE } from '@app/constants'

export const useAnalyticState = (): TypeAnalyticContextProps => {
	const { useMedicines } = useEndpoints()
	const { data: allMedicines = [], isLoading } = useMedicines()

	const screenWidth = useMemo(() => Dimensions.get('window').width, [])

	const activeMedicines = useMemo(
		() =>
			medicineUtils.getMedicinesByFilters(
				allMedicines,
				ANALYTIC_FILTERS_OF_ACTIVE,
			),
		[allMedicines],
	)

	const isProgressChartAvailable = useMemo(
		() => activeMedicines.length > 0 && activeMedicines.length <= 20,
		[activeMedicines],
	)
	const isNoMedicines = useMemo(() => isDeserted(allMedicines), [allMedicines])

	return {
		screenWidth,

		allMedicines,
		activeMedicines,

		isLoading,
		isNoMedicines,
		isProgressChartAvailable,
	}
}
