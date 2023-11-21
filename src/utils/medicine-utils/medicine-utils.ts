import { filter, get, includes, sortBy, toLower } from 'lodash'

import { T_CardFilters, I_Medicine, T_MedicineSortableField } from '@app/types'

interface I_GetMedicineStatusByDateResponse {
	isActive: boolean
	isFuture: boolean
	isPast: boolean
}

interface I_MedicineUtils {
	getMedicineStatusByDate: (
		item: I_Medicine,
	) => I_GetMedicineStatusByDateResponse
	getMedicinesByFilters: (
		items: I_Medicine[],
		filters: T_CardFilters,
	) => I_Medicine[]
	getMedicinesBySearchValue: (
		items: I_Medicine[],
		value: string,
	) => I_Medicine[]
	getSortedBy: (
		items: I_Medicine[],
		sortType: T_MedicineSortableField,
	) => I_Medicine[]
}

// TODO: rewrite on class to have chaining
export const medicineUtils: I_MedicineUtils = {
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
