import { useMemo, useCallback, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import { TypeMedicine } from '@app/types'
import { dateToFormat, medicineUtils } from '@app/utils'
import {
	EnumColor,
	EnumIconName,
	EnumStackRoute,
	EnumMedicineType,
	EnumCardListMode,
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
		countPerUse,
		countPerDay,
		notification,
		startDate,
		endDate,
	} = useMemo(() => data, [data])

	const howManyToTakeDaily = useMemo(
		() => `${countPerUse} / ${countPerDay} ${t('card:date.daily')}`,
		[t, countPerUse, countPerDay],
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

	const commonIconProps = useMemo(
		() => ({
			color: EnumColor.white,
			size: 24,
		}),
		[],
	)

	const medicineIcon = useMemo(() => {
		const MEDICINE_ICON_MAP: Record<EnumMedicineType, ReactElement> = {
			[EnumMedicineType.pill]: (
				<Icon name={EnumIconName.pill} {...commonIconProps} />
			),

			[EnumMedicineType.cream]: (
				<Icon name={EnumIconName.cream} {...commonIconProps} />
			),
		}

		return MEDICINE_ICON_MAP[type]
	}, [type, commonIconProps])

	const notificationIcon = useMemo(
		() => (
			<Icon
				name={notification ? EnumIconName.bell : EnumIconName.bellOff}
				{...commonIconProps}
			/>
		),
		[notification, commonIconProps],
	)

	const cardColor = useMemo(() => {
		if (isPast) {
			return EnumColor.darkGrey
		}

		if (isFuture) {
			return EnumColor.blue
		}

		if (isActive) {
			return EnumColor.red
		}

		return EnumColor.red
	}, [isPast, isFuture, isActive])

	const borderCardColorStyle = useMemo(
		() => ({ borderColor: cardColor }),
		[cardColor],
	)

	const backgroundCardColorStyle = useMemo(
		() => ({ backgroundColor: cardColor }),
		[cardColor],
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
		borderCardColorStyle,
		backgroundCardColorStyle,

		onCardPress,
	}
}
