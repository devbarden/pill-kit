import { FC, memo } from 'react'
import { Box } from 'native-base'

import { Medicine } from '@app/types'
import { uid } from '@app/utils'

import { Card } from '../Card'
import { styles } from './Content.styles'

interface Props {
	items: Medicine[]
}

export const Content: FC<Props> = memo(({ items }) => (
	<Box style={styles.content}>
		{items.map((item) => (
			<Card key={uid()} data={item} />
		))}
	</Box>
))
