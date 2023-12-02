import { FC, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './ColorBox.styles'

type TypeProps = {
	color: string
}

export const ColorBox: FC<TypeProps> = memo(({ color }) => (
	<Box style={[styles.wrapper, { backgroundColor: color }]} />
))
