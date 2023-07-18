export interface Medicine {
	id: string
	name: string
}

export type PossibleMedicine = Medicine | null

export type PossibleMedicines = Medicine[] | null

export type MedicineWithoutId = Omit<Medicine, 'id'>

export type MedicineId = Medicine['id']
