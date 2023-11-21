import { FC, memo } from 'react'
import { Text } from 'native-base'

import { styles } from './Title.styles'

type TypeProps = {
	title: string
}

export const Title: FC<TypeProps> = memo(({ title }) => (
	<Text style={styles.title}>{title}</Text>
))
