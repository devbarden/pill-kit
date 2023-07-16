export interface Medicine {
	id: string
	name: string
}

export type PossibleMedicine = Medicine | null

export type PossibleMedicines = Medicine[] | null
