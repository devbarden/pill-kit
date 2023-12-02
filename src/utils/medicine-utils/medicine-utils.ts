import { filter, get, includes, sortBy, toLower } from 'lodash'

import {
	TypeCardFilters,
	TypeMedicine,
	TypeMedicineSortableField,
} from '@app/typess'

type TypeGetMedicineStatusByDateResponse = {
	isActive: boolean
	isFuture: boolean
	isPast: boolean
}

type TypeMedicineUtils = {
	getMedicineStatusByDate: (
		item: TypeMedicine,
	) => TypeGetMedicineStatusByDateResponse
	getMedicinesByFilters: (
		items: TypeMedicine[],
		filters: TypeCardFilters,
	) => TypeMedicine[]
	getMedicinesBySearchValue: (
		items: TypeMedicine[],
		value: string,
	) => TypeMedicine[]
	getSortedBy: (
		items: TypeMedicine[],
		sortType: TypeMedicineSortableField,
	) => TypeMedicine[]
}

// TODO: rewrite on class to have chaining
export const medicineUtils: TypeMedicineUtils = {
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
