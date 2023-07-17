import { FC, memo } from 'react'
import { Box, Heading } from 'native-base'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { styles } from './Loader.styles'

export const Loader: FC = memo(() => (
	<Box style={styles.wrapper}>
		<Icon name="pill" size={128} color="rgb(219, 39, 119)" />
		<Heading size="4xl" color="rgb(219, 39, 119)">
			Pill Kit
		</Heading>
	</Box>
))
