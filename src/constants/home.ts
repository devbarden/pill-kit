import { EnumCardFilter } from '@app/enums'
import { TypeCardFilters } from '@app/xtypes'

export const INITIAL_HOME_FILTERS: TypeCardFilters = {
	[EnumCardFilter.active]: true,
	[EnumCardFilter.future]: true,
	[EnumCardFilter.past]: false,
}
