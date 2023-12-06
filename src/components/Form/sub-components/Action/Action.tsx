import { FC, memo, useMemo, useCallback } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Text } from 'native-base'

import { EnumColor } from '@app/enums'

import { styles } from './Action.styles'

type TypeProps = {
	text: string
	handler: () => void
	isDisabled?: boolean
}

export const Action: FC<TypeProps> = memo(
	({ text, handler, isDisabled = false }) => {
		const textColor = useMemo(
			() => (isDisabled ? EnumColor.darkGrey : EnumColor.black),
			[isDisabled],
		)

		const getPressableStyles = useCallback(
			({ pressed }: PressableStateCallbackType) => [
				styles.wrapper,
				{
					backgroundColor: pressed ? EnumColor.lightGrey : EnumColor.white,
				},
			],
			[],
		)

		return (
			<Pressable style={getPressableStyles} onPress={handler}>
				<Text
					fontSize="md"
					textAlign="center"
					numberOfLines={1}
					color={textColor}>
					{text}
				</Text>
			</Pressable>
		)
	},
)
