import { useMemo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import { TypeMedicine } from '@app/types'
import { GlobalStateContext } from '@app/context'
import { dateToFormat, medicineUtils } from '@app/utils'
import {
	EnumColor,
	EnumStackRoute,
	EnumCardListMode,
	EnumMedicineType,
	EnumLanguageCode,
} from '@app/enums'

export const useCardState = (data: TypeMedicine, mode: EnumCardListMode) => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { language } = useContext(GlobalStateContext)

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
		color,
		notification,
		startDate,
		endDate,
	} = useMemo(() => data, [data])

	const isModeV1 = useMemo(() => mode === EnumCardListMode.v1, [mode])
	const isModeV2 = useMemo(() => mode === EnumCardListMode.v2, [mode])

	const isArabic = useMemo(() => language === EnumLanguageCode.ar, [language])

	const transformedCountPerUse = useMemo(() => {
		if (type === EnumMedicineType.liquid) {
			return `${countPerUse}${t('medicine:indicator.ml')}`
		}

		return countPerUse
	}, [t, type, countPerUse])

	const fromDate = useMemo(
		() => `${t('card:date.from')} ${dateToFormat(startDate, language)}`,
		[t, startDate, language],
	)

	const tillDate = useMemo(
		() => `${t('card:date.till')} ${dateToFormat(endDate, language)}`,
		[t, endDate, language],
	)

	const dateRange = useMemo(
		() =>
			isArabic
				? `${dateToFormat(endDate, language)} - ${dateToFormat(startDate, language)}`
				: `${dateToFormat(startDate, language)} - ${dateToFormat(endDate, language)}`,
		[isArabic, startDate, endDate, language],
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

	const cardColor = useMemo(() => {
		if (isPast) {
			return EnumColor.darkGrey
		}

		if (isFuture || isActive) {
			return color
		}

		return EnumColor.red
	}, [isPast, isFuture, isActive, color])

	const onCardPress = useCallback(() => {
		navigate(EnumStackRoute.editMedicine, { id })
	}, [navigate, id])

	return {
		isModeV1,
		isModeV2,

		isArabic,

		isPast,
		isFuture,
		isActive,

		name,
		type,
		transformedCountPerUse,
		countPerDay,
		notification,
		dateText,

		labelText,

		cardColor,

		onCardPress,
	}
}
