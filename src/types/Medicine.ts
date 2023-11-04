import { MEDICINE_TYPE } from '@app/constants'

export interface Medicine {
	id: string
	name: string
	type: MEDICINE_TYPE
	countPerUse: string
	countPerDay: string
	completed: boolean
	notification: boolean
	startDate: number
	endDate: number
}

export type PossibleMedicine = Medicine | null

export type PossibleMedicines = Medicine[] | null

export type MedicineWithoutId = Omit<Medicine, 'id'>

export type MedicineId = Medicine['id']
