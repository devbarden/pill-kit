import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as resources from '@app/languages'
import { FALLBACK_LANGUAGE_CODE } from '@app/constants'

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	resources,
	lng: Localization.locale,
	fallbackLng: FALLBACK_LANGUAGE_CODE,
	interpolation: {
		escapeValue: false,
	},
	cleanCode: true,
} as any)

export default i18n
