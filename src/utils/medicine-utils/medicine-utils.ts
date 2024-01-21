import { filter, get, includes, reverse, sortBy, toLower } from 'lodash'

import {
	TypeMedicine,
	TypeCardFilters,
	TypeMedicineWithoutId,
	TypeMedicineSortableField,
} from '@app/types'

type TypeGetMedicineStatusByDateResponse = {
	isActive: boolean
	isFuture: boolean
	isPast: boolean
}

type TypeMedicineUtils = {
	getMedicineStatusByDate: (
		item: TypeMedicine | TypeMedicineWithoutId,
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
		isReversed?: boolean,
	) => TypeMedicine[]
}

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

	getSortedBy(medicines, sortType, isReversed = false) {
		const sortedList = sortBy(medicines, (item) => get(item, sortType))

		if (isReversed) {
			return reverse(sortedList)
		}

		return sortedList
	},
}
