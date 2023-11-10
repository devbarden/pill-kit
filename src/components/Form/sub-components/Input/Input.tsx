import { FC, memo } from 'react'
import { Input as BaseInput, IInputProps } from 'native-base'

import { styles } from './Input.styles'

export const Input: FC<IInputProps> = memo((props) => (
	<BaseInput isFullWidth variant="unstyled" style={styles.input} {...props} />
))
