import { EnumLanguageCode } from '@app/enums'

export const isRTL = (language: string) => {
	if (language.includes(EnumLanguageCode.ar)) {
		return true
	}

	return false
}
