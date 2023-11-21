import { FC, memo } from 'react'
import { Text } from 'native-base'

import { styles } from './Title.styles'

interface I_Props {
	title: string
}

export const Title: FC<I_Props> = memo(({ title }) => (
	<Text style={styles.title}>{title}</Text>
))
