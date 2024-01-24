import { map } from 'lodash'

import { TypeSelectItem } from '@app/types'
import { EnumLanguageCode } from '@app/enums'

import { ARABIC_NUMBER_CODE } from '../../constants/language'

export const getNumberByLocale = (
	value: number | string | undefined,
	language: EnumLanguageCode,
): string => {
	if (typeof value === 'undefined') {
		return ''
	}

	const parsedValue = typeof value === 'string' ? parseFloat(value) : value

	if (language === EnumLanguageCode.ar) {
		return parsedValue.toLocaleString(ARABIC_NUMBER_CODE)
	}

	return parsedValue.toLocaleString(language)
}

export const getSelectNumberItemsByLocale = (
	items: TypeSelectItem[],
	language: EnumLanguageCode,
) =>
	map(items, (item) => ({
		...item,
		label: getNumberByLocale(item.label, language),
	}))
