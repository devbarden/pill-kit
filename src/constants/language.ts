import { EnumLanguageCode } from '@app/enums'

export const LANGUAGES: Record<EnumLanguageCode, string> = {
	[EnumLanguageCode.en]: 'English',
	[EnumLanguageCode.ru]: 'Русский',
}

export const FALLBACK_LANGUAGE = EnumLanguageCode.en
