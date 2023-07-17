import { useState, useEffect } from 'react'

import { PossibleMedicine } from '@app/types'
import { getMedicineById } from '@app/api'

interface MedicinesState {
	data: PossibleMedicine
	isLoading: boolean
}

export const useMedicineById = (id: string) => {
	const [state, setState] = useState<MedicinesState>({
		data: null,
		isLoading: false,
	})

	const loadMedicine = async (id: string) => {
		setState((prev) => ({ ...prev, isLoading: true }))

		const medicine: PossibleMedicine = await getMedicineById(id)

		setState((prev) => ({ ...prev, data: medicine, isLoading: false }))
	}

	useEffect(() => {
		loadMedicine(id)
	}, [id])

	return state
}
