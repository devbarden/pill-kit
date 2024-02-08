import { EnumLanguageCode } from '@app/enums'

export const isRTL = (locale: string) => {
	if (locale.includes(EnumLanguageCode.ar)) {
		return true
	}

	return false
}
