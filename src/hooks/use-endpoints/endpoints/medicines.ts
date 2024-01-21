import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '@app/api'
import { toast } from '@app/utils'
import { TypeMedicine, TypeMedicineId, TypeMedicineWithoutId } from '@app/types'

export const useMedicinesEndpoints = () => {
	const queryClient = useQueryClient()
	const { t } = useTranslation()

	const invalidateMedicines = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: ['medicines'] })
	}, [queryClient])

	return {
		useInitMedicines: () =>
			useQuery({
				queryKey: ['init-medicines'],
				queryFn: api.initMedicines,
			}),

		useMedicines: () =>
			useQuery({
				queryKey: ['medicines'],
				queryFn: api.getMedicines,
			}),

		useMedicine: (id: TypeMedicineId) =>
			useQuery({
				queryKey: ['medicine', id],
				queryFn: () => api.getMedicine(id),
			}),

		useAddMedicine: () =>
			useMutation({
				mutationFn: (medicine: TypeMedicineWithoutId) =>
					api.setMedicine(medicine),
				onSuccess: () => {
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notification:medicine.error'))
				},
			}),

		useEditMedicine: (id: TypeMedicineId) =>
			useMutation({
				mutationFn: (medicine: TypeMedicineWithoutId) =>
					api.editMedicine(id, medicine),
				onSuccess: () => {
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notification:medicine.error'))
				},
			}),

		useRemoveMedicine: () =>
			useMutation({
				mutationFn: (id: TypeMedicineId) => api.removeMedicine(id),
				onSuccess: () => {
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notification:medicine.error'))
				},
			}),

		useRemoveAllMedicines: () =>
			useMutation({
				mutationFn: api.removeAllMedicines,
				onSuccess: () => {
					toast.success(t('notification:medicine.removeAll'))
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notification:medicine.error'))
				},
			}),

		useUpdateActiveAndFutureMedicines: () =>
			useMutation({
				mutationFn: (medicines: TypeMedicine[]) =>
					api.updateActiveAndFutureMedicines(medicines),
				onSuccess: () => {
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notification:medicine.error'))
				},
			}),
	}
}
