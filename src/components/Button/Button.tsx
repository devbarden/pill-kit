import { FC, ReactElement, memo } from 'react'
import { Button as BaseButton, IButtonProps } from 'native-base'

import { styles } from './Button.styles'

interface Props {
	children: ReactElement | string
	[rest: string]: IButtonProps
}

export const Button: FC<Props> = memo(({ children, ...rest }) => (
	<BaseButton style={styles.button} {...rest}>
		{children}
	</BaseButton>
))
