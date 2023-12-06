import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import { TypeMedicine } from '@app/types'
import { dateToFormat, medicineUtils } from '@app/utils'
import {
	EnumColor,
	EnumIconName,
	EnumStackRoute,
	EnumCardListMode,
	EnumMedicineType,
} from '@app/enums'

import { Icon } from '../../../../../Icon'

export const useCardState = (data: TypeMedicine, mode: EnumCardListMode) => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const { isActive, isFuture, isPast } = useMemo(
		() => medicineUtils.getMedicineStatusByDate(data),
		[data],
	)

	const {
		id,
		name,
		type,
		color,
		countPerUse,
		countPerDay,
		notification,
		startDate,
		endDate,
	} = useMemo(() => data, [data])

	const transformedCountPerUse = useMemo(() => {
		if (type === EnumMedicineType.liquid) {
			return `${countPerUse}${t('medicine:indicator.ml')}`
		}

		return countPerUse
	}, [t, type, countPerUse])

	const howManyToTakeDaily = useMemo(
		() =>
			`${
				transformedCountPerUse ? transformedCountPerUse + ' / ' : ''
			}${countPerDay} ${t('card:date.daily')}`,
		[t, transformedCountPerUse, countPerDay],
	)

	const fromDate = useMemo(
		() => `${t('card:date.from')} ${dateToFormat(startDate)}`,
		[t, startDate],
	)

	const tillDate = useMemo(
		() => `${t('card:date.till')} ${dateToFormat(endDate)}`,
		[t, endDate],
	)

	const dateRange = useMemo(
		() => `${dateToFormat(startDate)} - ${dateToFormat(endDate)}`,
		[startDate, endDate],
	)

	const dateToShow = useMemo(() => {
		if (isPast) {
			return dateRange
		}

		if (isFuture) {
			return fromDate
		}

		if (isActive) {
			return tillDate
		}

		return tillDate
	}, [tillDate, fromDate, dateRange, isPast, isFuture, isActive])

	const dateText = useMemo(() => {
		if (mode === EnumCardListMode.v1) {
			return dateToShow
		}

		if (mode === EnumCardListMode.v2) {
			return dateRange
		}

		return dateRange
	}, [mode, dateToShow, dateRange])

	const labelText = useMemo(() => {
		if (isPast) {
			return t('card:label.past')
		}

		if (isFuture) {
			return t('card:label.future')
		}

		if (isActive) {
			return t('card:label.active')
		}

		return t('card:label.active')
	}, [t, isPast, isFuture, isActive])

	const isNeedLabel = useMemo(() => {
		if (mode === EnumCardListMode.v1) {
			return !isActive
		}

		if (mode === EnumCardListMode.v2) {
			return true
		}

		return false
	}, [mode, isActive])

	const cardColor = useMemo(() => {
		if (isPast) {
			return EnumColor.darkGrey
		}

		if (isFuture || isActive) {
			return color
		}

		return EnumColor.red
	}, [isPast, isFuture, isActive, color])

	const medicineIcon = useMemo(
		() => <Icon name={EnumIconName[type]} color={cardColor} size={24} />,
		[type, cardColor],
	)

	const notificationIcon = useMemo(
		() => (
			<Icon
				name={notification ? EnumIconName.bell : EnumIconName.bellOff}
				color={cardColor}
				size={16}
			/>
		),
		[notification, cardColor],
	)

	const onCardPress = useCallback(() => {
		navigate(EnumStackRoute.editMedicine, { id })
	}, [navigate, id])

	return {
		isPast,
		isFuture,
		isActive,

		name,
		howManyToTakeDaily,
		dateText,

		labelText,
		isNeedLabel,

		medicineIcon,
		notificationIcon,

		cardColor,

		onCardPress,
	}
}
