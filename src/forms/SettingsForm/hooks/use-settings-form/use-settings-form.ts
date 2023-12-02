import { useMemo, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Linking } from 'react-native'

import {
	RATE_LINK,
	DONATE_LINK,
	UPGRADE_LINK,
	MAIL_TO_LINK,
	FALLBACK_LANGUAGE_LABEL,
	LANGUAGE_SELECT_ITEMS,
} from '@app/constants'
import { getSelectedLanguage } from '@app/utils'
import { TypeModalHandlers, TypeSettingsFormContextProps } from '@app/typess'

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

	const upgradeHandler = useCallback(() => {
		Linking.openURL(UPGRADE_LINK)
	}, [])

	const mailHandler = useCallback(() => {
		Linking.openURL(MAIL_TO_LINK)
	}, [])

	const donateHandler = useCallback(() => {
		Linking.openURL(DONATE_LINK)
	}, [])

	const rateHandler = useCallback(() => {
		Linking.openURL(RATE_LINK)
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

		upgradeHandler,
		mailHandler,
		donateHandler,
		rateHandler,

		openLanguageModal,
		closeLanguageModal,

		openRemoveDataModal,
		openTermsOfUseModal,
	}
}
