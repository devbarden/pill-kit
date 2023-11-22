import { FC, memo, ReactElement } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Pressable } from 'native-base'

import { styles } from './Action.styles'

type TypeProps = {
	icon: ReactElement
	handler: () => void
	style?: StyleProp<ViewStyle>
}

export const Action: FC<TypeProps> = memo(({ icon, handler, style }) => (
	<Pressable onPress={handler} style={[styles.action, style]}>
		{icon}
	</Pressable>
))
