import { useState, useEffect } from 'react'

import { Medicine, PossibleMedicines } from '@app/types'
import { getMedicines } from '@app/api'

interface MedicinesState {
	data: PossibleMedicines
	isLoading: boolean
}

export const useMedicines = () => {
	const [state, setState] = useState<MedicinesState>({
		data: null,
		isLoading: false,
	})

	const loadMedicines = async () => {
		setState(prev => ({ ...prev, isLoading: true }))

		const medicines: Medicine[] = await getMedicines()

		setState(prev => ({ ...prev, data: medicines, isLoading: false }))
	}

	useEffect(() => {
		loadMedicines()
	}, [])

	return state
}
