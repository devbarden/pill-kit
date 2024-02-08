import { useMemo, useCallback, useRef } from 'react'
import { Linking } from 'react-native'

import { getSelectedLanguage } from '@app/utils'
import { TypeModalHandlers, TypeSettingsFormContextProps } from '@app/types'
import {
	MAIL_TO_LINK,
	TERMS_OF_USE_LINK,
	LANGUAGE_SELECT_ITEMS,
	FALLBACK_LANGUAGE_LABEL,
} from '@app/constants'
import { useGlobalContext } from '@app/hooks'

export const useSettingsForm = (): TypeSettingsFormContextProps => {
	const { locale, setLocale } = useGlobalContext()

	const removeAlertRef = useRef<TypeModalHandlers>(null)
	const modalLanguageRef = useRef<TypeModalHandlers>(null)

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

		changeLanguageHandler,

		mailHandler,
		termsOfUseHandler,

		openLanguageModal,
		closeLanguageModal,

		openRemoveDataModal,
	}
}
