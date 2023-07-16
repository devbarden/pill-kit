import { useState, useEffect } from 'react'

import { initMedicines } from '@app/api'

export const useInitMedicines = () => {
	const [isLoading, setIsLoading] = useState(false)

	const load = async () => {
		setIsLoading(true)

		await initMedicines()

		setIsLoading(false)
	}

	useEffect(() => {
		load()
	}, [])

	return { isLoading }
}
