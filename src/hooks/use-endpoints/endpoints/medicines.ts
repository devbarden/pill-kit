import { useCallback } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import {
	getMedicine,
	setMedicine,
	editMedicine,
	getMedicines,
	initMedicines,
	removeMedicine,
} from '@app/api'
import { MedicineId, MedicineWithoutId } from '@app/types'

export const useMedicinesEndpoints = () => {
	const queryClient = useQueryClient()

	const invalidateMedicines = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: ['medicines'] })
	}, [queryClient])

	return {
		useInitMedicines: () =>
			useQuery({
				queryKey: ['init-medicines'],
				queryFn: initMedicines,
			}),

		useMedicines: () =>
			useQuery({
				queryKey: ['medicines'],
				queryFn: getMedicines,
			}),

		useMedicine: (id: MedicineId) =>
			useQuery({
				queryKey: ['medicine', id],
				queryFn: () => getMedicine(id),
			}),

		useAddMedicine: () =>
			useMutation({
				mutationFn: (medicine: MedicineWithoutId) => setMedicine(medicine),
				onSuccess: () => {
					invalidateMedicines()
				},
			}),

		useRemoveMedicine: () =>
			useMutation({
				mutationFn: (id: MedicineId) => removeMedicine(id),
				onSuccess: () => {
					invalidateMedicines()
				},
			}),

		useEditMedicine: (id: MedicineId) =>
			useMutation({
				mutationFn: (medicine: MedicineWithoutId) => editMedicine(id, medicine),
				onSuccess: () => {
					invalidateMedicines()
				},
			}),
	}
}
