import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as medicineApi from '@app/api'
import { toast } from '@app/utils'
import { T_MedicineId, T_MedicineWithoutId } from '@app/types'

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

		useMedicine: (id: T_MedicineId) =>
			useQuery({
				queryKey: ['medicine', id],
				queryFn: () => medicineApi.getMedicine(id),
			}),

		useAddMedicine: () =>
			useMutation({
				mutationFn: (medicine: T_MedicineWithoutId) =>
					medicineApi.setMedicine(medicine),
				onSuccess: () => {
					toast.success(t('notifications:medicines.add'))
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notifications:medicines.error'))
				},
			}),

		useEditMedicine: (id: T_MedicineId) =>
			useMutation({
				mutationFn: (medicine: T_MedicineWithoutId) =>
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
				mutationFn: (id: T_MedicineId) => medicineApi.removeMedicine(id),
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
