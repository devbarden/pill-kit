import { FC, memo, useMemo } from 'react'

import { Loader, Header, CardsList, ContentWrapper } from '@app/components'

import { useHomeState } from './hooks'
import { HomeContext } from './context'
import { Empty, AddMedicineAction } from './sub-components'

export const Home: FC = memo(() => {
	const state = useHomeState()

	const { medicines, isLoading, isNoMedicines } = useMemo(() => state, [state])

	if (isLoading) {
		return <Loader />
	}

	return (
		<HomeContext.Provider value={state}>
			<Header withLogo action={<AddMedicineAction />} />
			{isNoMedicines ? (
				<Empty />
			) : (
				<ContentWrapper>
					<CardsList items={medicines} />
				</ContentWrapper>
			)}
		</HomeContext.Provider>
	)
})
