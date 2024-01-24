import { EnumLanguageCode } from '@app/enums'

import { ARABIC_NUMBER_CODE } from '../../constants/language'

export const getDivideValueByDates = (
	startDate: number,
	endDate: number,
): number => {
	const value = (Date.now() - startDate) / (endDate - startDate)
	const result = parseFloat(value.toFixed(2))

	return result
}

export const getDaysArrayInRange = (
	startDate: number,
	endDate: number,
): string[] => {
	const result = []

	for (
		let date = new Date(startDate);
		date <= new Date(endDate);
		date.setDate(date.getDate() + 1)
	) {
		result.push(new Date(date).toISOString().split('T')[0])
	}

	return result
}

export const getTimeByDate = (value: Date | number) => {
	const date = typeof value === 'object' ? value : new Date(value)

	const time = {
		hours: date.getHours(),
		minutes: date.getMinutes(),
	}

	return time
}

export const timeToFormat = (
	value: number,
	language: EnumLanguageCode,
): string => {
	const options: Record<string, string> = { hour: '2-digit', minute: '2-digit' }

	if (language === EnumLanguageCode.ar) {
		return new Date(value).toLocaleTimeString(ARABIC_NUMBER_CODE, options)
	}

	return new Date(value).toLocaleTimeString(language, options)
}

export const dateToFormat = (
	value: number,
	language: EnumLanguageCode,
): string => {
	if (language === EnumLanguageCode.ar) {
		return new Date(value).toLocaleDateString(ARABIC_NUMBER_CODE)
	}

	return new Date(value).toLocaleDateString(language)
}
