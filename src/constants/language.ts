import { entries } from 'lodash'

import { TypeSelectItem } from '@app/types'
import { EnumLanguageCode } from '@app/enums'

export const LANGUAGES: Record<EnumLanguageCode, string> = {
	[EnumLanguageCode.en]: 'English',
	[EnumLanguageCode.ru]: 'Русский',
	[EnumLanguageCode.es]: 'Español',
	[EnumLanguageCode.de]: 'Deutsch',
	[EnumLanguageCode.ar]: 'العربية',
	[EnumLanguageCode.be]: 'Беларуская мова',
	[EnumLanguageCode.pl]: 'Polski',
	[EnumLanguageCode.uk]: 'Українська мова',
	[EnumLanguageCode.ka]: 'ქართული ენა',
	[EnumLanguageCode.zh]: '文言',
	[EnumLanguageCode.it]: 'Italiano',
	[EnumLanguageCode.fr]: 'Français',
	[EnumLanguageCode.pt]: 'Português',
	[EnumLanguageCode.ja]: '日本語',
	[EnumLanguageCode.tr]: 'Türkçe',
	[EnumLanguageCode.ko]: '한국어',
	[EnumLanguageCode.bn]: 'বাংলা',
	[EnumLanguageCode.hi]: 'हिन्दी',
}

export const LANGUAGE_SELECT_ITEMS: TypeSelectItem[] = entries(LANGUAGES).map(
	([value, label]) => ({
		value,
		label,
	}),
)

export const FALLBACK_LANGUAGE_CODE = EnumLanguageCode.en

export const FALLBACK_LANGUAGE_LABEL = LANGUAGES[FALLBACK_LANGUAGE_CODE]

export const ARABIC_NUMBER_CODE = `${EnumLanguageCode.ar}-EG`
