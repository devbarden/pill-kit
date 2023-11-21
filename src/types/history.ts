import { Dispatch, SetStateAction } from 'react'

import { TypeMedicine, TypeMedicineSortableField } from './medicine'
import { TypeCardFilters } from './card'

export type TypeHistoryContextProps = {
	searchValue: string
	setSearchValue: Dispatch<SetStateAction<string>>
	filters: TypeCardFilters
	setFilters: Dispatch<SetStateAction<TypeCardFilters>>
	medicines: TypeMedicine[]
	isLoading: boolean
	sortType: TypeMedicineSortableField
	setSortType: Dispatch<SetStateAction<TypeMedicineSortableField>>
}
