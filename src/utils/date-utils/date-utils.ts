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
