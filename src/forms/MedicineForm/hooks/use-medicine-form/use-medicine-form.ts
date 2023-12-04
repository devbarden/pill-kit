import {
	useRef,
	useMemo,
	useState,
	useEffect,
	useContext,
	useCallback,
} from 'react'
import { map } from 'lodash'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

import { EnumMedicineType } from '@app/enums'
import { GlobalStateContext } from '@app/context'
import {
	addWeeks,
	removeWeeks,
	isAnyFieldEmpty,
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

export const useMedicineForm = ({
	data,
	submitHandler,
	isSubmitting,
}: TypeMedicineFormProps): TypeMedicineFormContextProps => {
	const modalNameRef = useRef<TypeModalHandlers>(null)
	const modalTypeRef = useRef<TypeModalHandlers>(null)
	const modalCountPerUseRef = useRef<TypeModalHandlers>(null)
	const modalCountPerDayRef = useRef<TypeModalHandlers>(null)
	const modalTimeRef = useRef<TypeModalHandlers>(null)
	const modalColorRef = useRef<TypeModalHandlers>(null)

	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { activeTab } = useContext(GlobalStateContext)

	const [form, setForm] = useState<TypeMedicineWithoutId>(data)

	const isCancelBtnDisabled = useMemo(() => isSubmitting, [isSubmitting])

	const formToValidate = useMemo(
		() => getMedicineWithoutCountPerUseField(form),
		[form],
	)

	const isSaveBtnDisabled = useMemo(
		() => isSubmitting || isAnyFieldEmpty(formToValidate),
		[isSubmitting, formToValidate],
	)

	const getCountPerUseValueByType = useCallback(
		(countPerUse: TypeMedicineCountPerUse, type: EnumMedicineType) => {
			if (type === EnumMedicineType.liquid) {
				return `${countPerUse} ${t('medicine:indicator.ml')}`
			}

			return countPerUse
		},
		[t],
	)

	const getCountPerUseSelectItems = useCallback(
		(type: EnumMedicineType) => {
			if (type === EnumMedicineType.pill) {
				return MEDICINE_ITEMS_COUNT_PER_USE_SELECT_ITEMS
			}

			if (type === EnumMedicineType.liquid) {
				return map(MEDICINE_LIQUID_COUNT_PER_USE_SELECT_ITEMS, (item) => ({
					...item,
					label: `${item.label} ${t('medicine:indicator.ml')}`,
				}))
			}

			if (type === EnumMedicineType.drops) {
				return MEDICINE_ITEMS_COUNT_PER_USE_SELECT_ITEMS
			}

			return []
		},
		[t],
	)

	const getIsNeedToFillCountPerUse = useCallback(
		(type: EnumMedicineType) =>
			type === EnumMedicineType.pill ||
			type === EnumMedicineType.liquid ||
			type === EnumMedicineType.drops,
		[],
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
		(event: DateTimePickerEvent, date?: Date) => {
			if (!date) return

			const startDate = date.setHours(0, 0, 0, 0)

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

			const endDate = date.setHours(23, 59, 59, 999)

			setForm((prev) => ({
				...prev,
				startDate:
					endDate < prev.startDate ? removeWeeks(date, 2) : prev.startDate,
				endDate,
			}))
		},
		[],
	)

	const changeTimeHandler = useCallback(
		(time: TypeMedicineTime, date?: Date) => {
			if (!date) return

			setForm((prev) => ({
				...prev,
				times: prev.times.map((prevTime) =>
					prevTime.id === time.id
						? {
								...prevTime,
								hours: date?.getHours(),
								minutes: date?.getMinutes(),
						  }
						: prevTime,
				),
			}))
		},
		[],
	)

	const changeColorHandler = useCallback((color: string) => {
		setForm((prev) => ({
			...prev,
			color,
		}))
	}, [])

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

	const openColorModal = useCallback(() => {
		modalColorRef.current?.open()
	}, [])

	const openCountPerUseModal = useCallback(() => {
		modalCountPerUseRef.current?.open()
	}, [])

	const openCountPerDayModal = useCallback(() => {
		modalCountPerDayRef.current?.open()
	}, [])

	const openTimeModal = useCallback(() => {
		modalTimeRef.current?.open()
	}, [])

	const closeTypeModal = useCallback(() => {
		modalTypeRef.current?.close()
	}, [])

	const closeColorModal = useCallback(() => {
		modalColorRef.current?.close()
	}, [])

	const closeCountPerUseModal = useCallback(() => {
		modalCountPerUseRef.current?.close()
	}, [])

	const closeCountPerDayModal = useCallback(() => {
		modalCountPerDayRef.current?.close()
	}, [])

	const closeTimeModal = useCallback(() => {
		modalTimeRef.current?.close()
	}, [])

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

		openNameModal,
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

		form,

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

		saveHandler,
		backHandler,

		isCancelBtnDisabled,
		isSaveBtnDisabled,
	}
}
