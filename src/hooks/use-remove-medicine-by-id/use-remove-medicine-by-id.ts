import { useState, useCallback } from 'react'

import { removeMedicineById } from '@app/api'

export const useRemoveMedicineById = () => {
	const [isLoading, setIsLoading] = useState(false)

	const action = useCallback(async (id: string) => {
		setIsLoading(true)

		await removeMedicineById(id)

		setIsLoading(false)
	}, [])

	return {
		action,
		isLoading,
	}
}
