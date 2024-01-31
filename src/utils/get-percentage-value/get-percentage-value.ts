import { EnumLanguageCode } from '@app/enums'

import { getNumberByLocale } from '../get-number-by-locale'

export const getPercentageValue = (value: number, language: string) => {
	const number = getNumberByLocale(Math.round(value * 100), language)

	if (language.includes(EnumLanguageCode.ar)) {
		return `%${number}`
	}

	return `${number}%`
}
