import { EnumCardFilter } from '@app/enums'
import { TypeCardFilters } from '@app/types'

export const HOME_FILTERS: TypeCardFilters = {
	[EnumCardFilter.active]: true,
	[EnumCardFilter.future]: true,
	[EnumCardFilter.past]: false,
}
