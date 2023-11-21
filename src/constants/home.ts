import { T_CardFilters } from '@app/types'

import { CARD_FILTER } from './card'

export const HOME_FILTERS: T_CardFilters = {
	[CARD_FILTER.ACTIVE]: true,
	[CARD_FILTER.FUTURE]: true,
	[CARD_FILTER.PAST]: false,
}
