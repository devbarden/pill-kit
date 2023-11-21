import { MEDICINE_TYPE } from '@app/constants'

export interface I_Medicine {
	id: string
	name: string
	type: MEDICINE_TYPE
	countPerUse: string
	countPerDay: string
	notification: boolean
	startDate: number
	endDate: number
}

export type T_MedicineWithSortableFields = Omit<
	I_Medicine,
	'id' | 'type' | 'countPerUse' | 'countPerDay' | 'notification'
>

export type T_MedicineSortableField = keyof T_MedicineWithSortableFields

export type T_PossibleMedicine = I_Medicine | null

export type T_PossibleMedicines = I_Medicine[] | null

export type T_MedicineWithoutId = Omit<I_Medicine, 'id'>

export type T_MedicineId = I_Medicine['id']
