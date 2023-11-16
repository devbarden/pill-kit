import { HistoryFilters } from '@app/types'

export enum HISTORY_FILTER {
	ACTIVE = 'active',
	FUTURE = 'future',
	PAST = 'past',
}

export const INITIAL_HISTORY_FILTERS: HistoryFilters = {
	[HISTORY_FILTER.ACTIVE]: true,
	[HISTORY_FILTER.FUTURE]: true,
	[HISTORY_FILTER.PAST]: true,
}
