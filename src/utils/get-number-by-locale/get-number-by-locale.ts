import { map } from 'lodash'

import { TypeSelectItem } from '@app/types'

export const getNumberByLocale = (
	value: number | string | undefined,
	locale: string,
): string => {
	if (typeof value === 'undefined') {
		return ''
	}

	const options = { useGrouping: false }
	const parsedValue = typeof value === 'string' ? parseFloat(value) : value

	return parsedValue.toLocaleString(locale, options)
}

export const getSelectNumberItemsByLocale = (
	items: TypeSelectItem[],
	locale: string,
) =>
	map(items, (item) => ({
		...item,
		label: getNumberByLocale(item.label, locale),
	}))
