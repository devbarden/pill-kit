import { TypeMedicine } from './medicine'

export type TypeAnalyticContextProps = {
	screenWidth: number

	allMedicines: TypeMedicine[]
	activeMedicines: TypeMedicine[]

	isLoading: boolean
	isNoMedicines: boolean
	isProgressChartAvailable: boolean
}
