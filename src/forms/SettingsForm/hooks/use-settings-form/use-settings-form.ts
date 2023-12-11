import { useMemo, useCallback, useRef, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Linking } from 'react-native'

import { EnumLanguageCode } from '@app/enums'
import { getSelectedLanguage } from '@app/utils'
import { GlobalStateContext } from '@app/context'
import { TypeModalHandlers, TypeSettingsFormContextProps } from '@app/types'
import {
	MAIL_TO_LINK,
	LANGUAGE_SELECT_ITEMS,
	FALLBACK_LANGUAGE_LABEL,
} from '@app/constants'

export const useSettingsForm = (): TypeSettingsFormContextProps => {
	const { i18n } = useTranslation()
	const { setLanguage } = useContext(GlobalStateContext)

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
		async (language: string) => {
			await setLanguage(language as EnumLanguageCode)
		},
		[setLanguage],
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
