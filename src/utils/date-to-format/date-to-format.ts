export const dateToFormat = (value: number): string =>
	new Date(value).toLocaleDateString()
