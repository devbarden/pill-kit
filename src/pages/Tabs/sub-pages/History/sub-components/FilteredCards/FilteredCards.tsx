import { FC, memo, useContext } from 'react'
import { Box } from 'native-base'

import { isDeserted } from '@app/utils'
import { CardsList } from '@app/components'

import { Empty } from '../Empty'
import { HistoryContext } from '../../context'
import { styles } from './FilteredCards.styles'

export const FilteredCards: FC = memo(() => {
	const { medicines } = useContext(HistoryContext)

	if (isDeserted(medicines)) {
		return <Empty />
	}

	return (
		<Box style={styles.wrapper}>
			<CardsList items={medicines} />
		</Box>
	)
})
