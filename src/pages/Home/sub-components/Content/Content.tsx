import { FC, memo } from 'react'
import { Box } from 'native-base'

import { Medicine } from '@app/types'
import { Card } from '../'
import { styles } from './Content.styles'

interface Props {
	items: Medicine[]
}

export const Content: FC<Props> = memo(({ items }) => (
	<Box style={styles.content}>
		{items.map(item => (
			<Card data={item} />
		))}
	</Box>
))
