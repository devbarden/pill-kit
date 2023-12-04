import { createContext } from 'react'

import { TypeAnalyticContextProps } from '@app/types'

export const AnalyticContext = createContext<TypeAnalyticContextProps>({
	screenWidth: 0,

	allMedicines: [],
	activeMedicines: [],

	isLoading: true,
	isNoMedicines: false,
	isProgressChartAvailable: false,
})
