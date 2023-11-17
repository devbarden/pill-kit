import { MEDICINE_TYPE } from '@app/constants'

export interface Medicine {
	id: string
	name: string
	type: MEDICINE_TYPE
	countPerUse: string
	countPerDay: string
	notification: boolean
	startDate: number
	endDate: number
}

export type MedicineWithSortableFields = Omit<
	Medicine,
	'id' | 'type' | 'countPerUse' | 'countPerDay' | 'notification'
>

export type MedicineSortableField = keyof MedicineWithSortableFields

export type PossibleMedicine = Medicine | null

export type PossibleMedicines = Medicine[] | null

export type MedicineWithoutId = Omit<Medicine, 'id'>

export type MedicineId = Medicine['id']
