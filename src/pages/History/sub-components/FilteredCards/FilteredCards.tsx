import { FC, memo, useContext } from 'react'

import { CardsList } from '@app/components'

import { HistoryContext } from '../../context'

export const FilteredCards: FC = memo(() => {
	const { filteredMedicines } = useContext(HistoryContext)

	return <CardsList items={filteredMedicines} />
})
