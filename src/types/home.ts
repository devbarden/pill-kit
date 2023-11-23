import { TypeMedicine } from './medicine'

export type TypeHomeContextProps = {
	medicines: TypeMedicine[]
	isLoading: boolean

	isNoMedicines: boolean

	addNewMedicineHandler: () => void
}
