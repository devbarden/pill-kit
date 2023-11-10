export enum LANGUAGE_CODES {
	EN = 'en',
	RU = 'ru',
}

export const LANGUAGES: Record<LANGUAGE_CODES, string> = {
	[LANGUAGE_CODES.EN]: 'English',
	[LANGUAGE_CODES.RU]: 'Русский',
}

export const FALLBACK_LANGUAGE = LANGUAGE_CODES.EN
