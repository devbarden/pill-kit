import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Loader, ContentWrapper, Header } from '@app/components'

import { useHistoryState } from './hooks'
import { HistoryContext } from './context'
import { SearchBar, SortSection, FilteredCards } from './sub-components'

export const History: FC = memo(() => {
	const { t } = useTranslation()
	const state = useHistoryState()

	if (state.isLoading) {
		return <Loader />
	}

	return (
		<HistoryContext.Provider value={state}>
			<Header title={t('history:title')} />
			<ContentWrapper
				withStretch={false}
				withVerticalPaddings
				withHorizontalPaddings>
				<SearchBar />
				<SortSection />
			</ContentWrapper>
			<ContentWrapper>
				<FilteredCards />
			</ContentWrapper>
		</HistoryContext.Provider>
	)
})
