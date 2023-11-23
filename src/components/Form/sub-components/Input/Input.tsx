import { FC, memo } from 'react'
import { Box, Input as BaseInput, IInputProps } from 'native-base'

import { styles } from './Input.styles'

export const Input: FC<IInputProps> = memo((props) => (
	<Box style={styles.wrapper}>
		<BaseInput isFullWidth variant="unstyled" style={styles.input} {...props} />
	</Box>
))
