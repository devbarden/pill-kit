import { TypeMedicineSortableField } from '@app/types'

export const CARD_MARGIN = 16

export const OVER_SWIPE_DIST = 20

export const SWIPE_SIZE = 65

export const CARD_ACTIVE_SCALE = 1.05

export const CARD_SORT_TYPE: Record<string, TypeMedicineSortableField> = {
	NAME: 'name',
	START_DATE: 'startDate',
	END_DATE: 'endDate',
}

export const INITIAL_CARD_SORT_TYPE = CARD_SORT_TYPE.START_DATE
