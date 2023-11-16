import { useMemo, useCallback, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import {
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons'

import { Medicine } from '@app/types'
import { dateToFormat, medicineUtils } from '@app/utils'
import { MEDICINE_TYPE, COLORS, STACK_ROUTES } from '@app/constants'

export const useCardState = (data: Medicine) => {
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
	const { t } = useTranslation()
	const { navigate } = useNavigation()

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

	const { isActive, isFuture, isPast } = useMemo(
		() => medicineUtils.getMedicineStatusByDate(data),
		[data],
	)

	const dateToShow = useMemo(() => {
		if (isPast) {
			return dateRange
		}

		if (isFuture) {
			return fromDate
		}

		return tillDate
	}, [tillDate, fromDate, dateRange, isPast, isFuture])

	const cardColor = useMemo(() => {
		if (isPast) {
			return COLORS.DARK_GREY
		}

		if (isFuture) {
			return COLORS.BLUE
		}

		return COLORS.RED
	}, [isPast, isFuture])

	const commonIconProps = useMemo(
		() => ({
			color: COLORS.WHITE,
			size: 24,
		}),
		[],
	)

	const notificationIcon = useMemo(
		() => (
			<Ionicons
				name={notification ? 'notifications' : 'notifications-off'}
				{...commonIconProps}
			/>
		),
		[notification, commonIconProps],
	)

	const medicineIcon = useMemo(() => {
		const MEDICINE_ICON_MAP: Record<MEDICINE_TYPE, ReactElement> = {
			[MEDICINE_TYPE.PILL]: (
				<MaterialCommunityIcons name="pill" {...commonIconProps} size={34} />
			),

			[MEDICINE_TYPE.CREAM]: (
				<MaterialIcons name="local-drink" {...commonIconProps} size={34} />
			),
		}

		return MEDICINE_ICON_MAP[type]
	}, [type, commonIconProps])

	const onCardPress = useCallback(() => {
		navigate(STACK_ROUTES.EDIT_MEDICINE, { id })
	}, [navigate, id])

	return {
		name,
		isPast,
		isFuture,
		isActive,
		cardColor,
		dateToShow,
		onCardPress,
		medicineIcon,
		notificationIcon,
		howManyToTakeDaily,
	}
}
