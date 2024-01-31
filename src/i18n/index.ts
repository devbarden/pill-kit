import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import * as resources from '@app/languages'
import { FALLBACK_LANGUAGE_CODE } from '@app/constants'

import { languageDetector } from './plugins'

i18n
	.use(initReactI18next)
	.use(languageDetector)
	.init({
		compatibilityJSON: 'v3',
		resources,
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
