import { FC, Fragment, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'native-base'

import { EnumColor } from '@app/enums'
import { ContentWrapper, Header } from '@app/components'

import { useHistoryState } from './hooks'
import { HistoryContext } from './context'
import { SearchBar, SortSection, FilteredCards } from './sub-components'

export const History: FC = memo(() => {
	const state = useHistoryState()

	const { t } = useTranslation()
	const { isLoading } = useMemo(() => state, [state])

	if (isLoading) {
		return (
			<Fragment>
				<Header withoutBorder title={t('history:title')} />
				<ContentWrapper withVerticalPaddings withHorizontalPaddings>
					<Skeleton
						h={200}
						borderRadius={12}
						startColor={EnumColor.white}
						endColor={EnumColor.grey}
					/>

					<Skeleton
						h={600}
						borderRadius={12}
						startColor={EnumColor.white}
						endColor={EnumColor.grey}
					/>
				</ContentWrapper>
			</Fragment>
		)
	}

	return (
		<HistoryContext.Provider value={state}>
			<Header withoutBorder title={t('history:title')} />
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
