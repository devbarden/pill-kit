import { map, range } from 'lodash'

import { EnumMedicineType } from '@app/enums'
import { TypeMedicineWithoutId } from '@app/types'

import { addWeeks, numberToSelectItem } from '../utils'

export const DEFAULT_EMPTY_MEDICINE: TypeMedicineWithoutId = {
	name: '',
	type: EnumMedicineType.pill,
	countPerUse: '1',
	countPerDay: '2',
	notification: true,
	startDate: Date.now(),
	endDate: addWeeks(new Date(), 2),
}

export const MEDICINE_MAX_LENGTH_OF_NAME = 30

export const MEDICINE_TYPE_TRANSLATION_PATH = 'medicine:types'

export const MEDICINE_PILL_COUNT_PER_USE_SELECT_ITEMS = map(
	range(1, 20),
	numberToSelectItem,
)

export const MEDICINE_PILL_COUNT_PER_DAY_SELECT_ITEMS = map(
	range(1, 20),
	numberToSelectItem,
)
