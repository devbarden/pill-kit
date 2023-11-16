import { filter, includes, sortBy, toLower } from 'lodash'

import { HistoryFilters, Medicine } from '@app/types'

export interface getMedicineStatusByDateResponse {
	isActive: boolean
	isFuture: boolean
	isPast: boolean
}

export interface MedicineUtils {
	getMedicineStatusByDate: (item: Medicine) => getMedicineStatusByDateResponse
	getMedicinesByHistoryFilters: (
		items: Medicine[],
		filters: HistoryFilters,
	) => Medicine[]
	getMedicinesBySearchValue: (items: Medicine[], value: string) => Medicine[]
	getSortedByStartDate: (items: Medicine[]) => Medicine[]
	getSortedByEndDate: (items: Medicine[]) => Medicine[]
}

export const medicineUtils: MedicineUtils = {
	getMedicineStatusByDate({ startDate, endDate }) {
		const isPast = Date.now() > endDate
		const isFuture = Date.now() < startDate
		const isActive = !isPast && !isFuture

		return {
			isActive,
			isFuture,
			isPast,
		}
	},

	getMedicinesByHistoryFilters(medicines, filters) {
		return filter(medicines, (medicine) => {
			const { isActive, isFuture, isPast } =
				this.getMedicineStatusByDate(medicine)

			if (!filters.active && isActive) {
				return false
			}

			if (!filters.future && isFuture) {
				return false
			}

			if (!filters.past && isPast) {
				return false
			}

			return true
		})
	},

	getMedicinesBySearchValue(medicines, value) {
		return value
			? filter(medicines, ({ name }) => includes(toLower(name), toLower(value)))
			: medicines
	},

	getSortedByStartDate(medicines) {
		return sortBy(medicines, ({ startDate }) => startDate)
	},

	getSortedByEndDate(medicines) {
		return sortBy(medicines, ({ endDate }) => endDate)
	},
}
