import { EnumLanguageCode } from '@app/enums'

import { getNumberByLocale } from '../get-number-by-locale'

export const getPercentageValue = (value: number, locale: string) => {
	const number = getNumberByLocale(Math.round(value * 100), locale)

	if (locale.includes(EnumLanguageCode.ar)) {
		return `%${number}`
	}

	return `${number}%`
}
