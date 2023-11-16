import { FC, memo } from 'react'
import { Box } from 'native-base'

import { Loader } from '@app/components'

import { useHistoryState } from './hooks'
import { HistoryContext } from './context'
import { SearchBar, FilteredCards } from './sub-components'
import { styles } from './History.styles'

export const History: FC = memo(() => {
	const state = useHistoryState()

	if (state.isLoading) {
		return <Loader />
	}

	return (
		<HistoryContext.Provider value={state}>
			<Box style={styles.wrapper}>
				<SearchBar />
				<FilteredCards />
			</Box>
		</HistoryContext.Provider>
	)
})
