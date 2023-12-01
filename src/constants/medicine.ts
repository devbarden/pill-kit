import { map, range } from 'lodash'

import { EnumMedicineType } from '@app/enums'
import { TypeMedicineWithoutId } from '@app/types'

import {
	addWeeks,
	numberToSelectItem,
	getFirstValueFromSelectItems,
} from '../utils'

export const MEDICINE_MAX_LENGTH_OF_NAME = 30

export const MEDICINE_TYPE_TRANSLATION_PATH = 'medicine:types'

export const MEDICINE_ITEMS_COUNT_PER_USE_SELECT_ITEMS = map(
	range(1, 51),
	numberToSelectItem,
)

export const MEDICINE_LIQUID_COUNT_PER_USE_SELECT_ITEMS = map(
	range(5, 101, 5),
	numberToSelectItem,
)

export const MEDICINE_COUNT_PER_DAY_SELECT_ITEMS = map(
	range(1, 11),
	numberToSelectItem,
)

export const MEDICINE_DEFAULT_NAME = ''

export const MEDICINE_DEFAULT_TYPE = EnumMedicineType.pill

export const MEDICINE_DEFAULT_ITEMS_COUNT_PER_USE =
	getFirstValueFromSelectItems(MEDICINE_ITEMS_COUNT_PER_USE_SELECT_ITEMS)

export const MEDICINE_DEFAULT_LIQUID_COUNT_PER_USE =
	getFirstValueFromSelectItems(MEDICINE_ITEMS_COUNT_PER_USE_SELECT_ITEMS)

export const MEDICINE_DEFAULT_COUNT_PER_DAY = getFirstValueFromSelectItems(
	MEDICINE_COUNT_PER_DAY_SELECT_ITEMS,
)

export const MEDICINE_DEFAULT_NOTIFICATION = true

export const MEDICINE_DEFAULT_START_DATE = Date.now()

export const MEDICINE_DEFAULT_END_DATE = addWeeks(new Date(), 2)

export const DEFAULT_EMPTY_MEDICINE: TypeMedicineWithoutId = {
	name: MEDICINE_DEFAULT_NAME,
	type: MEDICINE_DEFAULT_TYPE,
	countPerUse: MEDICINE_DEFAULT_ITEMS_COUNT_PER_USE,
	countPerDay: MEDICINE_DEFAULT_COUNT_PER_DAY,
	notification: MEDICINE_DEFAULT_NOTIFICATION,
	startDate: MEDICINE_DEFAULT_START_DATE,
	endDate: MEDICINE_DEFAULT_END_DATE,
}
