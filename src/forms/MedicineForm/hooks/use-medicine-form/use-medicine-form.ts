import {
	useRef,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback,
} from 'react'
import { useNavigation } from '@react-navigation/native'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

import { EnumMedicineType } from '@app/enums'
import { GlobalStateContext } from '@app/context'
import { addWeeks, removeWeeks, isAnyFieldEmpty } from '@app/utils'
import {
	TypeModalHandlers,
	TypeMedicineWithoutId,
	TypeMedicineFormProps,
	TypeMedicineFormContextProps,
} from '@app/types'

export const useMedicineForm = ({
	data,
	submitHandler,
	isSubmitting,
}: TypeMedicineFormProps): TypeMedicineFormContextProps => {
	const modalNameRef = useRef<TypeModalHandlers>(null)
	const modalTypeRef = useRef<TypeModalHandlers>(null)
	const modalCountPerUseRef = useRef<TypeModalHandlers>(null)
	const modalCountPerDayRef = useRef<TypeModalHandlers>(null)

	const { navigate } = useNavigation()
	const { activeTab } = useContext(GlobalStateContext)

	const [form, setForm] = useState<TypeMedicineWithoutId>(data)

	const isCancelBtnDisabled = useMemo(() => isSubmitting, [isSubmitting])
	const isSaveBtnDisabled = useMemo(
		() => isSubmitting || isAnyFieldEmpty(form),
		[isSubmitting, form],
	)

	const backHandler = useCallback(() => {
		navigate(activeTab)
	}, [navigate, activeTab])

	const changeNameHandler = useCallback((name: string) => {
		setForm((prev) => ({ ...prev, name }))
	}, [])

	const changeNameToEmptyHandler = useCallback(() => {
		setForm((prev) => ({ ...prev, name: '' }))
	}, [])

	const changeSwitchToggleHandler = useCallback(() => {
		setForm((prev) => ({ ...prev, notification: !prev.notification }))
	}, [])

	const changeTypeHandler = useCallback((type: string) => {
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

	const openNameModal = useCallback(() => {
		modalNameRef.current?.open()
	}, [])

	const openTypeModal = useCallback(() => {
		modalTypeRef.current?.open()
	}, [])

	const openCountPerUseModal = useCallback(() => {
		modalCountPerUseRef.current?.open()
	}, [])

	const openCountPerDayModal = useCallback(() => {
		modalCountPerDayRef.current?.open()
	}, [])

	const closeTypeModal = useCallback(() => {
		modalTypeRef.current?.close()
	}, [])

	const closeCountPerUseModal = useCallback(() => {
		modalCountPerUseRef.current?.close()
	}, [])

	const closeCountPerDayModal = useCallback(() => {
		modalCountPerDayRef.current?.close()
	}, [])

	useEffect(() => {
		setForm((prev) => ({ ...prev, ...data }))
	}, [data])

	return {
		modalNameRef,
		modalTypeRef,
		modalCountPerUseRef,
		modalCountPerDayRef,

		openNameModal,
		openTypeModal,
		closeTypeModal,
		openCountPerUseModal,
		closeCountPerUseModal,
		openCountPerDayModal,
		closeCountPerDayModal,

		form,

		changeNameHandler,
		changeNameToEmptyHandler,
		changeTypeHandler,
		changeCountPerUseHandler,
		changeCountPerDayHandler,
		changeStartDateHandler,
		changeEndDateHandler,
		changeSwitchToggleHandler,

		saveHandler,
		backHandler,

		isCancelBtnDisabled,
		isSaveBtnDisabled,
	}
}
