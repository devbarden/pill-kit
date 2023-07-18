import { useState, useCallback } from 'react'

import { MedicineId } from '@app/types'
import { removeMedicineById } from '@app/api'

export const useRemoveMedicineById = () => {
	const [isLoading, setIsLoading] = useState(false)

	const action = useCallback(async (id: MedicineId) => {
		setIsLoading(true)

		await removeMedicineById(id)

		setIsLoading(false)
	}, [])

	return {
		action,
		isLoading,
	}
}
