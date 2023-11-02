import { FC, ReactElement, memo } from 'react'
import { Box, Text } from 'native-base'

import { styles } from './Item.styles'

interface Props {
	name: string
	children: ReactElement
}

export const Item: FC<Props> = memo(({ name, children }) => (
	<Box style={styles.item}>
		<Text style={styles.text}>{name}</Text>
		<Box style={styles.value}>{children}</Box>
	</Box>
))
