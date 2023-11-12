import { useRef, useMemo, useCallback } from 'react'
import { Linking } from 'react-native'
import { useTranslation } from 'react-i18next'

import { getSelectedLanguage } from '@app/utils'

import { MAIL_TO_LINK } from '@app/constants'

import { RemoveAlertHandlers } from '../../sub-components'

export const useSettingsForm = () => {
	const removeAlertRef = useRef<RemoveAlertHandlers>(null)

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

	const mailHandler = useCallback(() => {
		Linking.openURL(MAIL_TO_LINK)
	}, [])

	const removeDataHandler = useCallback(() => {
		removeAlertRef.current?.openModal()
	}, [])

	return {
		removeAlertRef,
		selectedLanguage,
		changeLanguageHandler,
		mailHandler,
		removeDataHandler,
	}
}
