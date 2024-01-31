import { LanguageDetectorAsyncModule } from 'i18next'

import { getConfiguration, setConfiguration } from '@app/api'

export const languageDetector: LanguageDetectorAsyncModule = {
	type: 'languageDetector',
	async: true,

	init: () => {},

	detect: async (callback) => {
		try {
			const { language } = await getConfiguration()

			callback(language)

			return language
		} catch {}
	},

	cacheUserLanguage: async (language: string) => {
		try {
			const configuration = await getConfiguration()

			await setConfiguration({
				...configuration,
				language,
			})
		} catch {}
	},
}
