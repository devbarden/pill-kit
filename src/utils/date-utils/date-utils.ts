export const getDaysBetweenDates = (
	firstDate: number,
	secondDate: number,
): number =>
	Math.round(Math.abs((firstDate - secondDate) / (24 * 60 * 60 * 1000)))

export const getDivideValueByDates = (
	startDate: number,
	endDate: number,
): number => {
	const allDays = getDaysBetweenDates(endDate, Date.now())
	const leftDays = getDaysBetweenDates(endDate, startDate)

	const diff = allDays / leftDays
	const roundedValue = (1 - diff).toFixed(2)
	const result = parseFloat(roundedValue)

	return result
}

export const dateToFormat = (value: number): string =>
	new Date(value).toLocaleDateString()
