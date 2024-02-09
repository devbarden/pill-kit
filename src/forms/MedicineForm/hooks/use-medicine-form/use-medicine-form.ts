import { useRef, useMemo, useState, useEffect, useCallback } from 'react'
import { entries, filter, map } from 'lodash'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import { EnumMedicineType } from '@app/enums'
import { useGlobalContext } from '@app/hooks'
import {
	delay,
	addWeeks,
	isDeserted,
	removeWeeks,
	getTimeByDate,
	isAnyFieldEmpty,
	getNumberByLocale,
	getSelectNumberItemsByLocale,
	getFirstValueFromSelectItems,
	getMedicineWithoutCountPerUseField,
} from '@app/utils'
import {
	MEDICINE_DEFAULT_TIMES_MAP,
	MEDICINE_ITEMS_COUNT_PER_USE_SELECT_ITEMS,
	MEDICINE_LIQUID_COUNT_PER_USE_SELECT_ITEMS,
} from '@app/constants'
import {
	TypeMedicineTime,
	TypeModalHandlers,
	TypeMedicineWithoutId,
	TypeMedicineFormProps,
	TypeMedicineCountPerUse,
	TypeMedicineFormContextProps,
} from '@app/types'

export const useMedicineForm = (
	props: TypeMedicineFormProps,
): TypeMedicineFormContextProps => {
	const modalNameRef = useRef<TypeModalHandlers>(null)
	const modalTypeRef = useRef<TypeModalHandlers>(null)
	const modalCountPerUseRef = useRef<TypeModalHandlers>(null)
	const modalCountPerDayRef = useRef<TypeModalHandlers>(null)
	const modalTimeRef = useRef<TypeModalHandlers>(null)
	const modalColorRef = useRef<TypeModalHandlers>(null)
	const modalValidationRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const {
		locale,
		activeTab,
		isMedicineActionEnabled,
		setIsMedicineActionEnabled,
	} = useGlobalContext()
	const { data, submitHandler, isSubmitting } = props

	const [form, setForm] = useState<TypeMedicineWithoutId>(data)

	const initialMapOfRemindersToShow = useMemo(
		() => form.times.reduce((acc, { id }) => ({ ...acc, [id]: false }), {}),
		[form.times],
	)

	const [isNeedToShowStartDateModal, setIsNeedToShowStartDateModal] =
		useState(false)
	const [isNeedToShowEndDateModal, setIsNeedToShowEndDateModal] =
		useState(false)
	const [mapOfRemindersToShow, setMapOfRemindersToShow] = useState(
		initialMapOfRemindersToShow,
	)

	const formToValidate = useMemo(
		() => getMedicineWithoutCountPerUseField(form),
		[form],
	)

	const emptyFields = useMemo(() => {
		const formEntries = entries(formToValidate)
		const formEmptyEntries = filter(formEntries, ([field, value]) =>
			isDeserted(value),
		)
		const fields = map(formEmptyEntries, ([field]) => field)

		return fields
	}, [formToValidate])

	const isSaveBtnDisabled = useMemo(
		() =>
			isSubmitting ||
			!isMedicineActionEnabled ||
			isAnyFieldEmpty(formToValidate),
		[isSubmitting, isMedicineActionEnabled, formToValidate],
	)

	const openNameModal = useCallback(() => {
		modalNameRef.current?.open()
	}, [])

	const closeNameModal = useCallback(() => {
		modalNameRef.current?.close()
	}, [])

	const openTypeModal = useCallback(() => {
		modalTypeRef.current?.open()
	}, [])

	const closeTypeModal = useCallback(() => {
		modalTypeRef.current?.close()
	}, [])

	const openCountPerUseModal = useCallback(() => {
		modalCountPerUseRef.current?.open()
	}, [])

	const closeCountPerUseModal = useCallback(() => {
		modalCountPerUseRef.current?.close()
	}, [])

	const openCountPerDayModal = useCallback(() => {
		modalCountPerDayRef.current?.open()
	}, [])

	const closeCountPerDayModal = useCallback(() => {
		modalCountPerDayRef.current?.close()
	}, [])

	const openTimeModal = useCallback(() => {
		modalTimeRef.current?.open()
	}, [])

	const closeTimeModal = useCallback(() => {
		modalTimeRef.current?.close()
	}, [])

	const openColorModal = useCallback(() => {
		modalColorRef.current?.open()
	}, [])

	const closeColorModal = useCallback(() => {
		modalColorRef.current?.close()
	}, [])

	const openValidationModal = useCallback(() => {
		modalValidationRef.current?.open()
	}, [])

	const closeValidationModal = useCallback(() => {
		modalValidationRef.current?.close()
	}, [])

	const openStartDateModal = useCallback(() => {
		setIsNeedToShowStartDateModal(() => true)
	}, [])

	const closeStartDateModal = useCallback(() => {
		setIsNeedToShowStartDateModal(() => false)
	}, [])

	const openEndDateModal = useCallback(() => {
		setIsNeedToShowEndDateModal(() => true)
	}, [])

	const closeEndDateModal = useCallback(() => {
		setIsNeedToShowEndDateModal(() => false)
	}, [])

	const openReminderModal = useCallback((id: string) => {
		setMapOfRemindersToShow((prev) => ({ ...prev, [id]: true }))
	}, [])

	const closeReminderModal = useCallback((id: string) => {
		setMapOfRemindersToShow((prev) => ({ ...prev, [id]: false }))
	}, [])

	const getCountPerUseValueByType = useCallback(
		(countPerUse: TypeMedicineCountPerUse, type: EnumMedicineType) => {
			const value = getNumberByLocale(countPerUse, locale)

			if (type === EnumMedicineType.liquid) {
				return `${value} ${t('medicine:indicator.ml')}`
			}

			return value
		},
		[t, locale],
	)

	const getCountPerUseSelectItems = useCallback(
		(type: EnumMedicineType) => {
			const defaultItemsByLocale = getSelectNumberItemsByLocale(
				MEDICINE_ITEMS_COUNT_PER_USE_SELECT_ITEMS,
				locale,
			)

			const liquidItemsByLocale = map(
				MEDICINE_LIQUID_COUNT_PER_USE_SELECT_ITEMS,
				(item) => ({
					...item,
					label: `${getNumberByLocale(item.label, locale)} ${t('medicine:indicator.ml')}`,
				}),
			)

			if (type === EnumMedicineType.pill) {
				return defaultItemsByLocale
			}

			if (type === EnumMedicineType.liquid) {
				return liquidItemsByLocale
			}

			if (type === EnumMedicineType.drops) {
				return defaultItemsByLocale
			}

			return []
		},
		[t, locale],
	)

	const getIsNeedToFillCountPerUse = useCallback(
		(type: EnumMedicineType) =>
			type === EnumMedicineType.pill ||
			type === EnumMedicineType.liquid ||
			type === EnumMedicineType.drops,
		[],
	)

	const changeNameHandler = useCallback((name: string) => {
		setForm((prev) => ({ ...prev, name }))
	}, [])

	const changeNameToEmptyHandler = useCallback(() => {
		setForm((prev) => ({ ...prev, name: '' }))
	}, [])

	const changeSwitchToggleHandler = useCallback(() => {
		setForm((prev) => ({ ...prev, notification: !prev.notification }))
	}, [])

	const changeTypeHandler = useCallback(
		(type: string) => {
			const newType = type as EnumMedicineType

			setForm((prev) => ({
				...prev,
				type: newType,
				countPerUse: getIsNeedToFillCountPerUse(newType)
					? getFirstValueFromSelectItems(getCountPerUseSelectItems(newType))
					: undefined,
			}))
		},
		[getIsNeedToFillCountPerUse, getCountPerUseSelectItems],
	)

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
			times: MEDICINE_DEFAULT_TIMES_MAP[countPerDay],
		}))
	}, [])

	const changeStartDateHandler = useCallback(
		(date: Date) => {
			closeStartDateModal()

			const startDate = date.setHours(0, 0, 0, 0)

			setForm((prev) => ({
				...prev,
				startDate,
				endDate: startDate > prev.endDate ? addWeeks(date, 2) : prev.endDate,
			}))
		},
		[closeStartDateModal],
	)

	const changeEndDateHandler = useCallback(
		(date: Date) => {
			closeEndDateModal()

			const endDate = date.setHours(23, 59, 59, 999)

			setForm((prev) => ({
				...prev,
				startDate:
					endDate < prev.startDate ? removeWeeks(date, 2) : prev.startDate,
				endDate,
			}))
		},
		[closeEndDateModal],
	)

	const changeTimeHandler = useCallback(
		({ id }: TypeMedicineTime, date: Date) => {
			closeReminderModal(id)

			const time = getTimeByDate(date)

			setForm((prev) => ({
				...prev,
				times: prev.times.map((prevTime) =>
					prevTime.id === id
						? {
								...prevTime,
								...time,
							}
						: prevTime,
				),
			}))
		},
		[closeReminderModal],
	)

	const changeColorHandler = useCallback((color: string) => {
		setForm((prev) => ({
			...prev,
			color,
		}))
	}, [])

	const backHandler = useCallback(() => {
		navigate(activeTab)
	}, [navigate, activeTab])

	const disableHandler = useCallback(() => {
		openValidationModal()
	}, [openValidationModal])

	const saveHandler = useCallback(async () => {
		if (isSaveBtnDisabled) {
			disableHandler()

			return
		}

		setIsMedicineActionEnabled(false)

		await submitHandler(form)
		await delay(200)

		setIsMedicineActionEnabled(true)

		backHandler()
	}, [
		form,
		isSaveBtnDisabled,

		backHandler,
		submitHandler,
		disableHandler,
		setIsMedicineActionEnabled,
	])

	useEffect(() => {
		setForm((prev) => ({ ...prev, ...data }))
	}, [data])

	return {
		modalNameRef,
		modalTypeRef,
		modalColorRef,
		modalCountPerUseRef,
		modalCountPerDayRef,
		modalTimeRef,
		modalValidationRef,

		...props,

		form,
		emptyFields,
		mapOfRemindersToShow,

		isSaveBtnDisabled,
		isNeedToShowStartDateModal,
		isNeedToShowEndDateModal,

		openNameModal,
		closeNameModal,
		openTypeModal,
		closeTypeModal,
		openCountPerUseModal,
		closeCountPerUseModal,
		openCountPerDayModal,
		closeCountPerDayModal,
		openTimeModal,
		closeTimeModal,
		openColorModal,
		closeColorModal,
		openValidationModal,
		closeValidationModal,
		openStartDateModal,
		closeStartDateModal,
		openEndDateModal,
		closeEndDateModal,
		openReminderModal,
		closeReminderModal,

		getCountPerUseValueByType,
		getCountPerUseSelectItems,
		getIsNeedToFillCountPerUse,

		changeNameHandler,
		changeNameToEmptyHandler,
		changeTypeHandler,
		changeCountPerUseHandler,
		changeCountPerDayHandler,
		changeStartDateHandler,
		changeEndDateHandler,
		changeSwitchToggleHandler,
		changeTimeHandler,
		changeColorHandler,

		backHandler,
		saveHandler,
	}
}
