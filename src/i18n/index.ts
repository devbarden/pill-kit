import i18n from 'i18next'
import * as Localization from 'expo-localization'
import { initReactI18next } from 'react-i18next'
import { ReactNativeLanguageDetector } from 'react-native-localization-settings'

import * as resources from '@app/languages'
import { FALLBACK_LANGUAGE_CODE } from '@app/constants'

i18n
	.use(ReactNativeLanguageDetector)
	.use(initReactI18next)
	.init({
		compatibilityJSON: 'v3',
		resources,
		lng: Localization.locale,
		fallbackLng: FALLBACK_LANGUAGE_CODE,
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
		cleanCode: true,
	})

export default i18n
