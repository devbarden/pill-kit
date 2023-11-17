import { CardFilters } from '@app/types'

import { CARD_FILTER } from './card'

export const HOME_FILTERS: CardFilters = {
	[CARD_FILTER.ACTIVE]: true,
	[CARD_FILTER.FUTURE]: true,
	[CARD_FILTER.PAST]: false,
}
