import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as medicineApi from '@app/api'
import { toast } from '@app/utils'
import { MedicineId, MedicineWithoutId } from '@app/types'

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
				queryFn: medicineApi.initMedicines,
			}),

		useMedicines: () =>
			useQuery({
				queryKey: ['medicines'],
				queryFn: medicineApi.getMedicines,
			}),

		useMedicine: (id: MedicineId) =>
			useQuery({
				queryKey: ['medicine', id],
				queryFn: () => medicineApi.getMedicine(id),
			}),

		useAddMedicine: () =>
			useMutation({
				mutationFn: (medicine: MedicineWithoutId) =>
					medicineApi.setMedicine(medicine),
				onSuccess: () => {
					toast.success(t('notifications:medicines.add'))
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notifications:medicines.error'))
				},
			}),

		useEditMedicine: (id: MedicineId) =>
			useMutation({
				mutationFn: (medicine: MedicineWithoutId) =>
					medicineApi.editMedicine(id, medicine),
				onSuccess: () => {
					toast.success(t('notifications:medicines.edit'))
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notifications:medicines.error'))
				},
			}),

		useRemoveMedicine: () =>
			useMutation({
				mutationFn: (id: MedicineId) => medicineApi.removeMedicine(id),
				onSuccess: () => {
					toast.success(t('notifications:medicines.remove'))
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notifications:medicines.error'))
				},
			}),

		useRemoveAllMedicines: () =>
			useMutation({
				mutationFn: medicineApi.removeAllMedicines,
				onSuccess: () => {
					toast.success(t('notifications:medicines.removeAll'))
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notifications:medicines.error'))
				},
			}),
	}
}
