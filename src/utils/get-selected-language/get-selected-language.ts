import { FALLBACK_LANGUAGE } from '@app/constants'

import { languageSelectItems } from '../language-select-items'

export const getSelectedLanguage = (language: string) =>
	languageSelectItems.find(({ value }) => language.includes(value))?.value ??
	FALLBACK_LANGUAGE
