import { FC, memo } from 'react'
import { Box } from 'native-base'
import { isEmpty } from 'lodash'

import { Loader } from '@app/components'
import { useEndpoints } from '@app/hooks'

import { Header, Content, Empty } from './sub-components'
import { styles } from './Home.styles'

export const Home: FC = memo(() => {
	const { useMedicines } = useEndpoints()
	const { data: medicines = [], isLoading } = useMedicines()

	if (isLoading) {
		return <Loader />
	}

	if (isEmpty(medicines)) {
		return <Empty />
	}

	return (
		<Box style={styles.wrapper}>
			<Header />
			<Content items={medicines} />
		</Box>
	)
})
