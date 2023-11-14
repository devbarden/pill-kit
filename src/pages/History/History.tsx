import { FC, memo } from 'react'
import { Box } from 'native-base'

import { Loader } from '@app/components'

import { useHistoryState } from './hooks'
import { HistoryContext } from './context'
import { SearchBar, FilteredCards } from './sub-components'
import { styles } from './History.styles'

export const History: FC = memo(() => {
	const context = useHistoryState()

	if (context.isLoading) {
		return <Loader />
	}

	return (
		<HistoryContext.Provider value={context}>
			<Box style={styles.wrapper}>
				<SearchBar />
				<FilteredCards />
			</Box>
		</HistoryContext.Provider>
	)
})
