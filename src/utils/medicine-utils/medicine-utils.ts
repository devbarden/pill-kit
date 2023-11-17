import { filter, get, includes, sortBy, toLower } from 'lodash'

import { CardFilters, Medicine, MedicineSortableField } from '@app/types'

export interface getMedicineStatusByDateResponse {
	isActive: boolean
	isFuture: boolean
	isPast: boolean
}

export interface MedicineUtils {
	getMedicineStatusByDate: (item: Medicine) => getMedicineStatusByDateResponse
	getMedicinesByFilters: (items: Medicine[], filters: CardFilters) => Medicine[]
	getMedicinesBySearchValue: (items: Medicine[], value: string) => Medicine[]
	getSortedBy: (
		items: Medicine[],
		sortType: MedicineSortableField,
	) => Medicine[]
}

// TODO: rewrite on class to have chaining
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

	getMedicinesByFilters(medicines, filters) {
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

	getSortedBy(medicines, sortType) {
		return sortBy(medicines, (item) => get(item, sortType))
	},
}
