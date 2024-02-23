import { FC, Fragment, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'native-base'

import { useGlobalContext } from '@app/hooks'
import { ContentWrapper, Header } from '@app/components'

import { useHistoryState } from './hooks'
import { HistoryContext } from './context'
import { SearchBar, SortSection, FilteredCards } from './sub-components'

export const History: FC = memo(() => {
	const state = useHistoryState()

	const { t } = useTranslation()
	const { globalStyleProps } = useGlobalContext()

	const { isLoading } = useMemo(() => state, [state])

	if (isLoading) {
		return (
			<Fragment>
				<Header title={t('history:title')} />
				<ContentWrapper withVerticalPaddings withHorizontalPaddings>
					<Skeleton
						h={200}
						borderRadius={12}
						startColor={globalStyleProps.style.color.primary}
						endColor={globalStyleProps.style.color.secondary}
					/>

					<Skeleton
						h={600}
						borderRadius={12}
						startColor={globalStyleProps.style.color.primary}
						endColor={globalStyleProps.style.color.secondary}
					/>
				</ContentWrapper>
			</Fragment>
		)
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
