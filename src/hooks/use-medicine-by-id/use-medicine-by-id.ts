import { useState, useEffect } from 'react'

import { getMedicineById } from '@app/api'
import { PossibleMedicine, MedicineId } from '@app/types'

interface MedicinesState {
	data: PossibleMedicine
	isLoading: boolean
}

export const useMedicineById = (id: MedicineId) => {
	const [state, setState] = useState<MedicinesState>({
		data: null,
		isLoading: false,
	})

	const loadMedicine = async (id: MedicineId) => {
		setState((prev) => ({ ...prev, isLoading: true }))

		const medicine: PossibleMedicine = await getMedicineById(id)

		setState((prev) => ({ ...prev, data: medicine, isLoading: false }))
	}

	useEffect(() => {
		loadMedicine(id)
	}, [id])

	return state
}
