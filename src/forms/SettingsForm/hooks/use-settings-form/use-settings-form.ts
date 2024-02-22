import { useMemo, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
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
import { EnumTheme } from '@app/enums'

export const useSettingsForm = (): TypeSettingsFormContextProps => {
	const { t } = useTranslation()
	const { useMedicines } = useEndpoints()
	const { data: medicines = [] } = useMedicines()
	const { theme, locale, setTheme, setLocale } = useGlobalContext()

	const modalRemoveRef = useRef<TypeModalHandlers>(null)
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

	const changeThemeHandler = useCallback(() => {
		if (theme === EnumTheme.light) {
			setTheme(EnumTheme.dark)
		}

		if (theme === EnumTheme.dark) {
			setTheme(EnumTheme.light)
		}
	}, [theme, setTheme])

	const mailHandler = useCallback(async () => {
		await Linking.openURL(MAIL_TO_LINK)
	}, [])

	const shareDataHandler = useCallback(async () => {
		const title = t('history:sort.medicines')
		const medicinesShortDescription = medicineUtils
			.getSortedBy(medicines, CARD_SORT_TYPE.START_DATE, false)
			.map(
				({ name, startDate, endDate }) =>
					`${name} ${dateToFormat(startDate, locale)} - ${dateToFormat(endDate, locale)}`,
			)

		const message = [title, ...medicinesShortDescription].join('\r\n')

		await Share.share({ message })
	}, [medicines, locale, t])

	const termsOfUseHandler = useCallback(async () => {
		await Linking.openURL(TERMS_OF_USE_LINK)
	}, [])

	const openRemoveModal = useCallback(() => {
		modalRemoveRef.current?.open()
	}, [])

	const closeRemoveModal = useCallback(() => {
		modalRemoveRef.current?.open()
	}, [])

	const openLanguageModal = useCallback(() => {
		modalLanguageRef.current?.open()
	}, [])

	const closeLanguageModal = useCallback(() => {
		modalLanguageRef.current?.close()
	}, [])

	return {
		modalRemoveRef,
		modalLanguageRef,

		selectedLanguage,

		isShareBtnAvailable,

		mailHandler,
		shareDataHandler,
		termsOfUseHandler,
		changeThemeHandler,
		changeLanguageHandler,

		openRemoveModal,
		closeRemoveModal,

		openLanguageModal,
		closeLanguageModal,
	}
}
