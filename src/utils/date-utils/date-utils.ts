export const getDivideValueByDates = (
	startDate: number,
	endDate: number,
): number => {
	const value = (Date.now() - startDate) / (endDate - startDate)
	const result = parseFloat(value.toFixed(2))

	return result
}

export const dateToFormat = (value: number): string =>
	new Date(value).toLocaleDateString()
