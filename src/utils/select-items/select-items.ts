import { entries, map, range } from 'lodash'

import { TypeSelectItem } from '@app/types'
import { LANGUAGES } from '@app/constants'

import { numberToSelectItem } from '../number-to-select-item'

export const languageSelectItems: TypeSelectItem[] = entries(LANGUAGES).map(
	([value, label]) => ({
		value,
		label,
	}),
)

export const medicinePillCountPerUseSelectItems = map(
	range(1, 20),
	numberToSelectItem,
)

export const medicineCountPerDaySelectItems = map(
	range(1, 20),
	numberToSelectItem,
)
