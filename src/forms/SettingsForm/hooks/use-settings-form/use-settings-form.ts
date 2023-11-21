import { useMemo, useCallback, useRef } from 'react'
import { Linking } from 'react-native'
import { useTranslation } from 'react-i18next'

import {
	DONATE_LINK,
	MAIL_TO_LINK,
	RATE_LINK,
	UPGRADE_LINK,
} from '@app/constants'
import { TypeModalHandlers } from '@app/types'
import { getSelectedLanguage } from '@app/utils'

export const useSettingsForm = () => {
	const removeAlertRef = useRef<TypeModalHandlers>(null)
	const termsOfUseRef = useRef<TypeModalHandlers>(null)

	const { i18n } = useTranslation()

	const selectedLanguage = useMemo(
		() => getSelectedLanguage(i18n.language),
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

	const openRemoveDataModal = useCallback(() => {
		removeAlertRef.current?.open()
	}, [])

	const openTermsOfUseModal = useCallback(() => {
		termsOfUseRef.current?.open()
	}, [])

	return {
		removeAlertRef,
		termsOfUseRef,
		selectedLanguage,
		changeLanguageHandler,
		mailHandler,
		openRemoveDataModal,
		donateHandler,
		rateHandler,
		openTermsOfUseModal,
		upgradeHandler,
	}
}
