import { useState, useMemo, useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

import { TypeMedicineWithoutId } from '@app/types'
import { EnumTabRoute, EnumMedicineType } from '@app/enums'
import { addWeeks, removeWeeks, isAnyFieldEmpty } from '@app/utils'

import { TypeMedicineFormProps } from '../../MedicineForm'

export const useMedicineForm = ({
	data,
	submitHandler,
	isSubmitting,
}: TypeMedicineFormProps) => {
	const { navigate } = useNavigation()

	const [form, setForm] = useState<TypeMedicineWithoutId>(data)

	const isCancelBtnDisabled = useMemo(() => isSubmitting, [isSubmitting])
	const isSaveBtnDisabled = useMemo(
		() => isSubmitting || isAnyFieldEmpty(form),
		[isSubmitting, form],
	)

	const backHandler = useCallback(() => {
		// TODO: implement go back
		navigate(EnumTabRoute.home)
	}, [navigate])

	const changeNameHandler = useCallback((name: string) => {
		setForm((prev) => ({ ...prev, name }))
	}, [])

	const notifySwitchToggle = useCallback(() => {
		setForm((prev) => ({ ...prev, notification: !prev.notification }))
	}, [])

	const typeChangeHandler = useCallback((type: string) => {
		setForm((prev) => ({ ...prev, type: type as EnumMedicineType }))
	}, [])

	const changeCountPerUseHandler = useCallback((countPerUse: string) => {
		setForm((prev) => ({
			...prev,
			countPerUse,
		}))
	}, [])

	const changeCountPerDayHandler = useCallback((countPerDay: string) => {
		setForm((prev) => ({
			...prev,
			countPerDay,
		}))
	}, [])

	const changeStartDateHandler = useCallback(
		(event: DateTimePickerEvent, date?: Date) => {
			if (!date) return

			const startDate = date.getTime()

			setForm((prev) => ({
				...prev,
				startDate,
				endDate: startDate > prev.endDate ? addWeeks(date, 2) : prev.endDate,
			}))
		},
		[],
	)

	const changeEndDateHandler = useCallback(
		(event: DateTimePickerEvent, date?: Date) => {
			if (!date) return

			const endDate = date.getTime()

			setForm((prev) => ({
				...prev,
				startDate:
					endDate < prev.startDate ? removeWeeks(date, 2) : prev.startDate,
				endDate,
			}))
		},
		[],
	)

	const saveHandler = useCallback(async () => {
		await submitHandler(form)

		backHandler()
	}, [submitHandler, form, backHandler])

	useEffect(() => {
		setForm((prev) => ({ ...prev, ...data }))
	}, [data])

	return {
		form,
		changeNameHandler,
		typeChangeHandler,
		changeCountPerUseHandler,
		changeCountPerDayHandler,
		changeStartDateHandler,
		changeEndDateHandler,
		notifySwitchToggle,
		saveHandler,
		backHandler,
		isCancelBtnDisabled,
		isSaveBtnDisabled,
	}
}
