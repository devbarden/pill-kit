import { EnumLanguageCode } from '@app/enums'
import { TypeMedicine, TypeMedicineTime } from '@app/types'

export const getNextYear = (n: number = 1) => {
	const date = new Date()
	const currentYear = date.getFullYear()

	date.setFullYear(currentYear + n)

	return date
}

export const getPrevYear = (n: number = 1) => {
	const date = new Date()
	const currentYear = date.getFullYear()

	date.setFullYear(currentYear - n)

	return date
}

export const getDivideValueByDates = (
	startDate: number,
	endDate: number,
): number => {
	const value = (Date.now() - startDate) / (endDate - startDate)
	const result = parseFloat(value.toFixed(2))

	return result
}

export const getDaysArrayInRange = (start: number, end: number): string[] => {
	const result = []

	for (
		let date = new Date(start);
		date <= new Date(end);
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

export const getDateWithTime = (
	value: number | string | Date,
	{ hours, minutes }: TypeMedicineTime,
) => {
	const date = typeof value === 'object' ? value : new Date(value)

	date.setHours(hours)
	date.setMinutes(minutes)
	date.setSeconds(0)
	date.setMilliseconds(0)

	return date
}

export const timeToFormat = (value: number, locale: string): string => {
	const is12HourFormat =
		locale.includes(EnumLanguageCode.en) ||
		locale.includes(EnumLanguageCode.ar) ||
		locale.includes(EnumLanguageCode.ko) ||
		locale.includes(EnumLanguageCode.bn) ||
		locale.includes(EnumLanguageCode.hi)

	const options: Record<string, string | boolean> = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: is12HourFormat,
	}

	return new Date(value).toLocaleTimeString(locale, options)
}

export const dateToFormat = (value: number, locale: string): string => {
	return new Date(value).toLocaleDateString(locale)
}

export const getDatesToNotify = ({
	startDate,
	endDate,
	times,
}: TypeMedicine): Date[] => {
	const now = Date.now()
	const start = startDate >= now ? startDate : now
	const days = getDaysArrayInRange(start, endDate)

	const dates: Date[] = days.reduce(
		(acc: Date[], value) => [
			...acc,
			...times.map((time) => getDateWithTime(value, time)),
		],
		[],
	)

	return dates
}
