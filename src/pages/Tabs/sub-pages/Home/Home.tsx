import { FC, memo, useMemo } from 'react'

import { Header, CardsList, ContentWrapper } from '@app/components'

import { useHomeState } from './hooks'
import { HomeContext } from './context'
import { Empty, Loading, AddMedicineAction } from './sub-components'

export const Home: FC = memo(() => {
	const state = useHomeState()

	const { medicines, isLoading, isNoMedicines } = useMemo(() => state, [state])

	return (
		<HomeContext.Provider value={state}>
			<Header withLogo action={<AddMedicineAction />} />
			{isLoading ? (
				<ContentWrapper withHorizontalPaddings withVerticalPaddings>
					<Loading />
				</ContentWrapper>
			) : isNoMedicines ? (
				<Empty />
			) : (
				<ContentWrapper>
					<CardsList items={medicines} />
				</ContentWrapper>
			)}
		</HomeContext.Provider>
	)
})
