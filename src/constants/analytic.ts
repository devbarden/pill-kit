import { EnumCardFilter } from '@app/enums'
import { TypeCardFilters } from '@app/types'

export const ANALYTIC_FILTERS_OF_ACTIVE: TypeCardFilters = {
	[EnumCardFilter.active]: true,
	[EnumCardFilter.future]: false,
	[EnumCardFilter.past]: false,
}
