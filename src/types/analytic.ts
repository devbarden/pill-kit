import { TypeMedicine } from './medicine'

export type TypeAnalyticContextProps = {
	allMedicines: TypeMedicine[]
	activeMedicines: TypeMedicine[]

	isLoading: boolean
	isNoMedicines: boolean
	isProgressChartAvailable: boolean
}
