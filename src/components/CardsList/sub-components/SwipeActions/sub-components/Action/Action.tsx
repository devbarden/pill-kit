import { FC, memo, ReactElement } from 'react'
import { Pressable } from 'native-base'

import { styles } from './Action.styles'

type TypeProps = {
	icon: ReactElement
	handler: () => void
}

export const Action: FC<TypeProps> = memo(({ icon, handler }) => (
	<Pressable onPress={handler} style={styles.action}>
		{icon}
	</Pressable>
))
