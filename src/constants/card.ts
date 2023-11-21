import { T_MedicineSortableField } from '@app/types'

export const CARD_MARGIN = 16

export enum CARD_FILTER {
	ACTIVE = 'active',
	FUTURE = 'future',
	PAST = 'past',
}

export const CARD_SORT_TYPE: Record<string, T_MedicineSortableField> = {
	NAME: 'name',
	START_DATE: 'startDate',
	END_DATE: 'endDate',
}
