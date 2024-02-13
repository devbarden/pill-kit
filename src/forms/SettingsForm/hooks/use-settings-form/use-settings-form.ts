import { useMemo, useCallback, useRef } from 'react'
import { Linking, Share } from 'react-native'

import { useEndpoints, useGlobalContext } from '@app/hooks'
import { TypeModalHandlers, TypeSettingsFormContextProps } from '@app/types'
import { dateToFormat, getSelectedLanguage, medicineUtils } from '@app/utils'
import {
	MAIL_TO_LINK,
	CARD_SORT_TYPE,
	TERMS_OF_USE_LINK,
	LANGUAGE_SELECT_ITEMS,
	FALLBACK_LANGUAGE_LABEL,
} from '@app/constants'

export const useSettingsForm = (): TypeSettingsFormContextProps => {
	const { useMedicines } = useEndpoints()
	const { data: medicines = [] } = useMedicines()
	const { locale, setLocale } = useGlobalContext()

	const removeAlertRef = useRef<TypeModalHandlers>(null)
	const modalLanguageRef = useRef<TypeModalHandlers>(null)

	const isShareBtnAvailable = useMemo(() => medicines.length > 0, [medicines])

	const selectedLanguage = useMemo(
		() =>
			getSelectedLanguage(
				LANGUAGE_SELECT_ITEMS,
				locale,
				FALLBACK_LANGUAGE_LABEL,
			),
		[locale],
	)

	const changeLanguageHandler = useCallback(
		async (locale: string) => {
			await setLocale(locale)
		},
		[setLocale],
	)

	const mailHandler = useCallback(async () => {
		await Linking.openURL(MAIL_TO_LINK)
	}, [])

	const shareDataHandler = useCallback(async () => {
		const message = medicineUtils
			.getSortedBy(medicines, CARD_SORT_TYPE.START_DATE, false)
			.map(
				({ name, startDate, endDate }) =>
					`${name} ${dateToFormat(startDate, locale)} - ${dateToFormat(endDate, locale)}`,
			)
			.join('\r\n')

		await Share.share({ message })
	}, [medicines, locale])

	const termsOfUseHandler = useCallback(async () => {
		await Linking.openURL(TERMS_OF_USE_LINK)
	}, [])

	const openLanguageModal = useCallback(() => {
		modalLanguageRef.current?.open()
	}, [])

	const closeLanguageModal = useCallback(() => {
		modalLanguageRef.current?.close()
	}, [])

	const openRemoveDataModal = useCallback(() => {
		removeAlertRef.current?.open()
	}, [])

	return {
		removeAlertRef,
		modalLanguageRef,

		selectedLanguage,

		isShareBtnAvailable,

		mailHandler,
		shareDataHandler,
		termsOfUseHandler,
		changeLanguageHandler,

		openLanguageModal,
		closeLanguageModal,
		openRemoveDataModal,
	}
}
