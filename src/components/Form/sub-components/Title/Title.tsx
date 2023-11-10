import { FC, memo } from 'react'
import { Text } from 'native-base'

import { styles } from './Title.styles'

export interface Props {
	title: string
}

export const Title: FC<Props> = memo(({ title }) => (
	<Text style={styles.title}>{title}</Text>
))
