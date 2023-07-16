import { useState, useCallback } from 'react'

import { Medicine } from '@app/types'
import { setMedicine } from '@app/api'

export const useAddMedicine = () => {
	const [isLoading, setIsLoading] = useState(false)

	const action = useCallback(async (medicine: Medicine) => {
		setIsLoading(true)

		await setMedicine(medicine)

		setIsLoading(false)
	}, [])

	return {
		action,
		isLoading,
	}
}
