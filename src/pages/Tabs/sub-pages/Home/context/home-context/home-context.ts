import { createContext } from 'react'

import { TypeHomeContextProps } from '@app/typess'

export const HomeContext = createContext<TypeHomeContextProps>({
	medicines: [],
	isLoading: false,

	isNoMedicines: false,

	addNewMedicineHandler: () => {},
})
