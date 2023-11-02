export const removeWeeks = (date: Date, weeks: number): number => {
	const newDate = date.setDate(date.getDate() - 7 * weeks)

	if (newDate < Date.now()) {
		return Date.now()
	}

	return newDate
}

export const addWeeks = (date: Date, weeks: number): number =>
	date.setDate(date.getDate() + 7 * weeks)
