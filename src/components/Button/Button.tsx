import { FC, ReactElement, memo } from 'react'
import { Button as BaseButton, IButtonProps } from 'native-base'

import { styles } from './Button.styles'

type TypeProps = {
	children: ReactElement | string
	[rest: string]: IButtonProps
}

export const Button: FC<TypeProps> = memo(({ children, ...rest }) => (
	<BaseButton style={styles.button} {...rest}>
		{children}
	</BaseButton>
))
