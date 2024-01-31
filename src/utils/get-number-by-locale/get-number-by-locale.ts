import { map } from 'lodash'

import { TypeSelectItem } from '@app/types'
import { EnumLanguageCode } from '@app/enums'

import { ARABIC_NUMBER_CODE } from '../../constants/language'

export const getNumberByLocale = (
	value: number | string | undefined,
	language: string,
): string => {
	if (typeof value === 'undefined') {
		return ''
	}

	const options = { useGrouping: false }
	const parsedValue = typeof value === 'string' ? parseFloat(value) : value

	if (language.includes(EnumLanguageCode.ar)) {
		return parsedValue.toLocaleString(ARABIC_NUMBER_CODE, options)
	}

	return parsedValue.toLocaleString(language, options)
}

export const getSelectNumberItemsByLocale = (
	items: TypeSelectItem[],
	language: string,
) =>
	map(items, (item) => ({
		...item,
		label: getNumberByLocale(item.label, language),
	}))
