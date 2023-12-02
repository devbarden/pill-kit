import { entries } from 'lodash'

import { TypeSelectItem } from '@app/xtypes'
import { EnumLanguageCode } from '@app/enums'

export const LANGUAGES: Record<EnumLanguageCode, string> = {
	[EnumLanguageCode.en]: 'English',
	[EnumLanguageCode.ru]: 'Русский',
}

export const LANGUAGE_SELECT_ITEMS: TypeSelectItem[] = entries(LANGUAGES).map(
	([value, label]) => ({
		value,
		label,
	}),
)

export const FALLBACK_LANGUAGE_CODE = EnumLanguageCode.en

export const FALLBACK_LANGUAGE_LABEL = LANGUAGES[FALLBACK_LANGUAGE_CODE]
