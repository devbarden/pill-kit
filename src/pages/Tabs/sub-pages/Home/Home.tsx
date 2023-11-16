import { FC, memo } from 'react'

import { isDeserted } from '@app/utils'
import { useEndpoints } from '@app/hooks'
import { Loader, CardsList, ContentWrapper, BgWrapper } from '@app/components'

import { Empty } from './sub-components'

export const Home: FC = memo(() => {
	const { useMedicines } = useEndpoints()
	const { data: medicines = [], isLoading } = useMedicines()

	if (isLoading) {
		return <Loader />
	}

	if (isDeserted(medicines)) {
		return (
			<BgWrapper>
				<ContentWrapper>
					<Empty />
				</ContentWrapper>
			</BgWrapper>
		)
	}

	return (
		<BgWrapper>
			<CardsList items={medicines} />
		</BgWrapper>
	)
})
