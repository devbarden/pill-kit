import { FC, memo, ReactElement } from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native'

import { styles } from './Action.styles'

type TypeProps = {
	icon: ReactElement
	handler: () => void
	style?: StyleProp<ViewStyle>
}

export const Action: FC<TypeProps> = memo(({ icon, handler, style }) => {
	return (
		<Pressable onPress={handler} style={[styles.action, style]}>
			{icon}
		</Pressable>
	)
})
