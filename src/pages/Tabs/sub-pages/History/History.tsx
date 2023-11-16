import { FC, memo } from 'react'

import { Loader, ContentWrapper, BgWrapper } from '@app/components'

import { useHistoryState } from './hooks'
import { HistoryContext } from './context'
import { SearchBar, SortSection, FilteredCards } from './sub-components'

export const History: FC = memo(() => {
	const state = useHistoryState()

	if (state.isLoading) {
		return <Loader />
	}

	return (
		<HistoryContext.Provider value={state}>
			<BgWrapper>
				<ContentWrapper withoutStretch>
					<SearchBar />
					<SortSection />
				</ContentWrapper>
				<FilteredCards />
			</BgWrapper>
		</HistoryContext.Provider>
	)
})
