import { FC, memo } from 'react'
import { isEmpty } from 'lodash'

import { Loader, ScreenWrapper } from '@app/components'
import { useEndpoints } from '@app/hooks'

import { Header, Content, Empty } from './sub-components'

export const Home: FC = memo(() => {
	const { useMedicines } = useEndpoints()
	const { data: medicines = [], isLoading } = useMedicines()

	if (isLoading) {
		return (
			<ScreenWrapper>
				<Loader />
			</ScreenWrapper>
		)
	}

	if (isEmpty(medicines)) {
		return (
			<ScreenWrapper>
				<Empty />
			</ScreenWrapper>
		)
	}

	return (
		<ScreenWrapper>
			<Header />
			<Content items={medicines} />
		</ScreenWrapper>
	)
})
