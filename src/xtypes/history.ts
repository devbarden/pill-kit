import { Dispatch, RefObject, SetStateAction } from 'react'

import { TypeCardFilters } from './card'
import { TypeModalHandlers } from './modal'
import { TypeMedicine, TypeMedicineSortableField } from './medicine'

export type TypeHistoryContextProps = {
	sortModalRef: RefObject<TypeModalHandlers> | null

	openSortModal: () => void
	closeSortModal: () => void

	searchValue: string
	setSearchValue: Dispatch<SetStateAction<string>>

	filters: TypeCardFilters
	setFilters: Dispatch<SetStateAction<TypeCardFilters>>

	sortType: TypeMedicineSortableField
	setSortType: Dispatch<SetStateAction<TypeMedicineSortableField>>

	medicines: TypeMedicine[]
	isLoading: boolean
}
