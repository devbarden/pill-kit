import { EnumMedicineType } from '@app/enums'

export type TypeMedicineTime = {
	id: string
	hours: number
	minutes: number
}

export type TypeMedicine = {
	id: string
	name: string
	type: EnumMedicineType
	countPerUse?: string
	countPerDay: string
	notification: boolean
	startDate: number
	endDate: number
	times: TypeMedicineTime[]
}

export type TypeMedicineWithSortableFields = Omit<
	TypeMedicine,
	'id' | 'type' | 'countPerUse' | 'countPerDay' | 'notification' | 'times'
>

export type TypeMedicineSortableField = keyof TypeMedicineWithSortableFields

export type TypePossibleMedicine = TypeMedicine | null

export type TypePossibleMedicines = TypeMedicine[] | null

export type TypeMedicineWithoutId = Omit<TypeMedicine, 'id'>

export type TypeMedicineId = TypeMedicine['id']

export type TypeMedicineCountPerUse = TypeMedicine['countPerUse']
