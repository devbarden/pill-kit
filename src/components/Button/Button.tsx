import { FC, ReactElement, memo } from 'react'
import { Button as BaseButton, IButtonProps } from 'native-base'

import { styles } from './Button.styles'

interface I_Props {
	children: ReactElement | string
	[rest: string]: IButtonProps
}

export const Button: FC<I_Props> = memo(({ children, ...rest }) => (
	<BaseButton style={styles.button} {...rest}>
		{children}
	</BaseButton>
))
