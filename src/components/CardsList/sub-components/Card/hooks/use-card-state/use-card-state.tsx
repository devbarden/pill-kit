import { useMemo, useCallback, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import {
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons'

import { Medicine } from '@app/types'
import { dateToFormat } from '@app/utils'
import { MEDICINE_TYPE, COLORS, ROUTES } from '@app/constants'

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

	const isExpired = useMemo(() => Date.now() > endDate, [endDate])

	const isUpcoming = useMemo(() => Date.now() < startDate, [startDate])

	const dateToShow = useMemo(() => {
		if (isExpired) {
			return dateRange
		}

		if (isUpcoming) {
			return fromDate
		}

		return tillDate
	}, [tillDate, fromDate, dateRange, isExpired, isUpcoming])

	const cardColor = useMemo(() => {
		if (isExpired) {
			return COLORS.DARK_GREY
		}

		if (isUpcoming) {
			return COLORS.BLUE
		}

		return COLORS.RED
	}, [isExpired, isUpcoming])

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
				<MaterialCommunityIcons name="pill" {...commonIconProps} />
			),

			[MEDICINE_TYPE.CREAM]: (
				<MaterialIcons name="local-drink" {...commonIconProps} />
			),
		}

		return MEDICINE_ICON_MAP[type]
	}, [type, commonIconProps])

	const onCardPress = useCallback(() => {
		navigate(ROUTES.EDIT_MEDICINE, { id })
	}, [navigate, id])

	return {
		name,
		isExpired,
		cardColor,
		dateToShow,
		onCardPress,
		medicineIcon,
		notificationIcon,
		howManyToTakeDaily,
	}
}
