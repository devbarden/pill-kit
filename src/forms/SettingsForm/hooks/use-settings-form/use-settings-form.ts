import { useMemo, useCallback, useRef, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Linking } from 'react-native'

import { EnumLanguageCode } from '@app/enums'
import { GlobalStateContext } from '@app/context'
import { delay, getSelectedLanguage } from '@app/utils'
import { TypeModalHandlers, TypeSettingsFormContextProps } from '@app/types'
import {
	MAIL_TO_LINK,
	TERMS_OF_USE_LINK,
	LANGUAGE_SELECT_ITEMS,
	FALLBACK_LANGUAGE_LABEL,
} from '@app/constants'

export const useSettingsForm = (): TypeSettingsFormContextProps => {
	const { i18n } = useTranslation()
	const { setLanguage } = useContext(GlobalStateContext)

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
			await delay(200)
		},
		[setLanguage],
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
