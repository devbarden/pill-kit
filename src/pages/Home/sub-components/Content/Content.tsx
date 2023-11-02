import { FC, memo } from 'react'
import { Box, ScrollView } from 'native-base'

import { uid } from '@app/utils'
import { Medicine } from '@app/types'
import { Card } from '@app/components'

import { styles } from './Content.styles'

interface Props {
	items: Medicine[]
}

export const Content: FC<Props> = memo(({ items }) => (
	<ScrollView>
		<Box style={styles.content}>
			{items.map((item) => (
				<Card key={uid()} data={item} />
			))}
		</Box>
	</ScrollView>
))
