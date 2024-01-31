import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import * as api from '@app/api'
import { toast } from '@app/utils'
import { TypeMedicine, TypeMedicineId, TypeMedicineWithoutId } from '@app/types'

export const useMedicinesEndpoints = () => {
	const { t } = useTranslation()

	const queryClient = useQueryClient()
	const mainQueryKey = useMemo(() => ['medicines'], [])

	const invalidateMedicines = useCallback(() => {
		queryClient.invalidateQueries({ queryKey: mainQueryKey })
	}, [queryClient, mainQueryKey])

	const reminderText = useMemo(() => t('reminders:takeMedicine'), [t])

	return {
		useInitMedicines: () =>
			useQuery({
				queryKey: ['init-medicines'],
				queryFn: api.initMedicines,
			}),

		useMedicines: () =>
			useQuery({
				queryKey: mainQueryKey,
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
					api.setMedicine(medicine, reminderText),
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
					api.editMedicine(id, medicine, reminderText),
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

		useUpdateActiveAndFutureMedicinesOrder: () =>
			useMutation({
				mutationFn: (medicines: TypeMedicine[]) =>
					api.updateActiveAndFutureMedicinesOrder(medicines),
				onSuccess: () => {
					invalidateMedicines()
				},
				onError: () => {
					toast.error(t('notification:medicine.error'))
				},
			}),
	}
}
