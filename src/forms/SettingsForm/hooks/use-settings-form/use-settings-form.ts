import { useRef, useMemo, useCallback } from 'react'
import { Linking } from 'react-native'
import { useTranslation } from 'react-i18next'

import { getSelectedLanguage } from '@app/utils'

import {
	DONATE_LINK,
	MAIL_TO_LINK,
	RATE_LINK,
	UPGRADE_LINK,
} from '@app/constants'

import { RemoveAlertHandlers, TermsOfUseHandlers } from '../../sub-components'

export const useSettingsForm = () => {
	const removeAlertRef = useRef<RemoveAlertHandlers>(null)
	const termsOfUseRef = useRef<TermsOfUseHandlers>(null)

	const { i18n } = useTranslation()

	const selectedLanguage = useMemo(
		() => getSelectedLanguage(i18n.language),
		[i18n],
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

	const removeDataHandler = useCallback(() => {
		removeAlertRef.current?.openModal()
	}, [])

	const termsOfUseHandler = useCallback(() => {
		termsOfUseRef.current?.openModal()
	}, [])

	return {
		removeAlertRef,
		termsOfUseRef,
		selectedLanguage,
		changeLanguageHandler,
		mailHandler,
		removeDataHandler,
		donateHandler,
		rateHandler,
		termsOfUseHandler,
		upgradeHandler,
	}
}
