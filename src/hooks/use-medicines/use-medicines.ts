import { useState, useEffect } from 'react'

import { Medicine } from '@app/types'
import { getMedicines } from '@app/api'

interface MedicinesState {
	data: Medicine[]
	isLoading: boolean
}

export const useMedicines = () => {
	const [state, setState] = useState<MedicinesState>({
		data: [],
		isLoading: false,
	})

	const loadMedicines = async () => {
		setState((prev) => ({ ...prev, isLoading: true }))

		const medicines: Medicine[] = await getMedicines()

		setState((prev) => ({ ...prev, data: medicines, isLoading: false }))
	}

	useEffect(() => {
		loadMedicines()
	}, [])

	return state
}
