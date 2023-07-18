import { useState, useCallback } from 'react'

import { MedicineId, MedicineWithoutId } from '@app/types'
import { editMedicine } from '@app/api'

export const useEditMedicine = (id: MedicineId) => {
	const [isLoading, setIsLoading] = useState(false)

	const action = useCallback(
		async (medicine: MedicineWithoutId) => {
			setIsLoading(true)

			await editMedicine(id, medicine)

			setIsLoading(false)
		},
		[id],
	)

	return {
		action,
		isLoading,
	}
}
