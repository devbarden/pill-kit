import { useState, useCallback } from 'react'

import { setMedicine } from '@app/api'
import { MedicineWithoutId } from '@app/types'

export const useAddMedicine = () => {
	const [isLoading, setIsLoading] = useState(false)

	const action = useCallback(async (medicine: MedicineWithoutId) => {
		setIsLoading(true)

		await setMedicine(medicine)

		setIsLoading(false)
	}, [])

	return {
		action,
		isLoading,
	}
}
