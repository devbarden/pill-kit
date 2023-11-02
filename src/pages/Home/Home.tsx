import { FC, memo } from 'react'

import { Loader } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { isDeserted } from '@app/utils'

import { Header, Content, Empty } from './sub-components'

export const Home: FC = memo(() => {
	const { useMedicines } = useEndpoints()
	const { data: medicines = [], isLoading } = useMedicines()

	if (isLoading) {
		return <Loader />
	}

	if (isDeserted(medicines)) {
		return <Empty />
	}

	return (
		<>
			<Header />
			<Content items={medicines} />
		</>
	)
})
