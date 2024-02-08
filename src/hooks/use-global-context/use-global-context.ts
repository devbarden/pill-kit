import { useContext } from 'react'

import { GlobalStateContext } from '@app/context'

export const useGlobalContext = () => {
	const context = useContext(GlobalStateContext)

	return context
}
