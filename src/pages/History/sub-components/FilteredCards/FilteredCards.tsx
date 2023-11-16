import { FC, memo, useContext } from 'react'

import { isDeserted } from '@app/utils'
import { CardsList } from '@app/components'

import { Empty } from '../Empty'
import { HistoryContext } from '../../context'

export const FilteredCards: FC = memo(() => {
	const { medicines } = useContext(HistoryContext)

	if (isDeserted(medicines)) {
		return <Empty />
	}

	return <CardsList items={medicines} />
})
