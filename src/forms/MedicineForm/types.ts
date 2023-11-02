import { MedicineWithoutId } from '@app/types'

export interface MedicineFormProps {
	title: string
	data: MedicineWithoutId
	submitHandler: (medicine: MedicineWithoutId) => void
	isSubmitting: boolean
}

export type UseMedicineFormProps = Omit<MedicineFormProps, 'title'>
