import { useMemo, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Linking } from 'react-native'

import {
	MAIL_TO_LINK,
	FALLBACK_LANGUAGE_LABEL,
	LANGUAGE_SELECT_ITEMS,
} from '@app/constants'
import { getSelectedLanguage } from '@app/utils'
import { TypeModalHandlers, TypeSettingsFormContextProps } from '@app/types'

export const useSettingsForm = (): TypeSettingsFormContextProps => {
	const { i18n } = useTranslation()

	const termsOfUseRef = useRef<TypeModalHandlers>(null)
	const removeAlertRef = useRef<TypeModalHandlers>(null)
	const modalLanguageRef = useRef<TypeModalHandlers>(null)

	const selectedLanguage = useMemo(
		() =>
			getSelectedLanguage(
				LANGUAGE_SELECT_ITEMS,
				i18n.language,
				FALLBACK_LANGUAGE_LABEL,
			),
		[i18n.language],
	)

	const changeLanguageHandler = useCallback(
		(language: string) => {
			i18n.changeLanguage(language)
		},
		[i18n],
	)

	const mailHandler = useCallback(async () => {
		await Linking.openURL(MAIL_TO_LINK)
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

	const openTermsOfUseModal = useCallback(() => {
		termsOfUseRef.current?.open()
	}, [])

	return {
		termsOfUseRef,
		removeAlertRef,
		modalLanguageRef,

		selectedLanguage,

		changeLanguageHandler,

		mailHandler,

		openLanguageModal,
		closeLanguageModal,

		openRemoveDataModal,
		openTermsOfUseModal,
	}
}
