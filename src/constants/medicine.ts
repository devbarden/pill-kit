import { map, range } from 'lodash'

import { EnumMedicineType, EnumColor } from '@app/enums'
import { TypeMedicineTime, TypeMedicineWithoutId } from '@app/types'

import {
	uid,
	addWeeks,
	numberToSelectItem,
	getFirstValueFromSelectItems,
} from '../utils'

export const MEDICINE_MAX_LENGTH_OF_NAME = 30

export const MEDICINE_TYPE_TRANSLATION_PATH = 'medicine:types'

export const MEDICINE_COLOR_TRANSLATION_PATH = 'medicine:colors'

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

export const MEDICINE_DEFAULT_TIMES_MAP: Record<string, TypeMedicineTime[]> = {
	'1': [{ id: uid(), hours: 12, minutes: 0 }],

	'2': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 20, minutes: 0 },
	],

	'3': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 14, minutes: 0 },
		{ id: uid(), hours: 20, minutes: 0 },
	],

	'4': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 12, minutes: 0 },
		{ id: uid(), hours: 16, minutes: 0 },
		{ id: uid(), hours: 10, minutes: 0 },
	],

	'5': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 11, minutes: 0 },
		{ id: uid(), hours: 14, minutes: 0 },
		{ id: uid(), hours: 17, minutes: 0 },
		{ id: uid(), hours: 20, minutes: 0 },
	],

	'6': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 10, minutes: 0 },
		{ id: uid(), hours: 12, minutes: 0 },
		{ id: uid(), hours: 14, minutes: 0 },
		{ id: uid(), hours: 16, minutes: 0 },
		{ id: uid(), hours: 18, minutes: 0 },
	],

	'7': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 10, minutes: 0 },
		{ id: uid(), hours: 12, minutes: 0 },
		{ id: uid(), hours: 14, minutes: 0 },
		{ id: uid(), hours: 16, minutes: 0 },
		{ id: uid(), hours: 18, minutes: 0 },
		{ id: uid(), hours: 20, minutes: 0 },
	],

	'8': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 10, minutes: 0 },
		{ id: uid(), hours: 11, minutes: 0 },
		{ id: uid(), hours: 12, minutes: 0 },
		{ id: uid(), hours: 14, minutes: 0 },
		{ id: uid(), hours: 16, minutes: 0 },
		{ id: uid(), hours: 18, minutes: 0 },
		{ id: uid(), hours: 20, minutes: 0 },
	],

	'9': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 10, minutes: 0 },
		{ id: uid(), hours: 11, minutes: 0 },
		{ id: uid(), hours: 12, minutes: 0 },
		{ id: uid(), hours: 13, minutes: 0 },
		{ id: uid(), hours: 14, minutes: 0 },
		{ id: uid(), hours: 15, minutes: 0 },
		{ id: uid(), hours: 16, minutes: 0 },
		{ id: uid(), hours: 17, minutes: 0 },
	],

	'10': [
		{ id: uid(), hours: 9, minutes: 0 },
		{ id: uid(), hours: 10, minutes: 0 },
		{ id: uid(), hours: 11, minutes: 0 },
		{ id: uid(), hours: 12, minutes: 0 },
		{ id: uid(), hours: 13, minutes: 0 },
		{ id: uid(), hours: 14, minutes: 0 },
		{ id: uid(), hours: 15, minutes: 0 },
		{ id: uid(), hours: 16, minutes: 0 },
		{ id: uid(), hours: 17, minutes: 0 },
		{ id: uid(), hours: 18, minutes: 0 },
	],
}

export const MEDICINE_DEFAULT_TIMES =
	MEDICINE_DEFAULT_TIMES_MAP[MEDICINE_DEFAULT_COUNT_PER_DAY]

export const MEDICINE_DEFAULT_COLOR = EnumColor.red

export const DEFAULT_EMPTY_MEDICINE: TypeMedicineWithoutId = {
	name: MEDICINE_DEFAULT_NAME,
	type: MEDICINE_DEFAULT_TYPE,
	countPerUse: MEDICINE_DEFAULT_ITEMS_COUNT_PER_USE,
	countPerDay: MEDICINE_DEFAULT_COUNT_PER_DAY,
	notification: MEDICINE_DEFAULT_NOTIFICATION,
	startDate: MEDICINE_DEFAULT_START_DATE,
	endDate: MEDICINE_DEFAULT_END_DATE,
	times: MEDICINE_DEFAULT_TIMES,
	color: MEDICINE_DEFAULT_COLOR,
}
