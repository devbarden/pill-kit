import { FC, memo } from 'react'
import { Box } from 'native-base'
import { nanoid } from 'nanoid'

import { Medicine } from '@app/types'

import { Card } from '../'
import { styles } from './Content.styles'

interface Props {
	items: Medicine[]
}

export const Content: FC<Props> = memo(({ items }) => (
	<Box style={styles.content}>
		{items.map((item) => (
			<Card key={nanoid()} data={item} />
		))}
	</Box>
))
