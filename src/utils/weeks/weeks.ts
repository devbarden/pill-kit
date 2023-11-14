export const removeWeeks = (date: Date, weeks: number): number =>
	date.setDate(date.getDate() - 7 * weeks)

export const addWeeks = (date: Date, weeks: number): number =>
	date.setDate(date.getDate() + 7 * weeks)
