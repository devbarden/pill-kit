import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en, ru } from '@app/languages'

i18n.use(initReactI18next).init({
	resources: { en, ru },
	lng: Localization.locale,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
	cleanCode: true,
} as any)

export default i18n
