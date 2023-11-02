import { values } from 'lodash'

export enum MedicineType {
	PILL = 'Pill',
	CREAM = 'Cream',
}

export const medicineTypesSelectItems = values(MedicineType).map((item) => ({
	value: item,
	label: item,
}))
