import { FC, memo, useMemo, useCallback } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Text } from 'native-base'

import { useGlobalContext } from '@app/hooks'

import { styles } from './Action.styles'

type TypeProps = {
	text: string
	handler: () => void
	isDisabled?: boolean
}

export const Action: FC<TypeProps> = memo(
	({ text, handler, isDisabled = false }) => {
		const { globalStyleProps } = useGlobalContext()

		const textColor = useMemo(
			() =>
				isDisabled
					? globalStyleProps.style.color.highlight
					: globalStyleProps.style.color.invert,
			[isDisabled, globalStyleProps],
		)

		const getPressableStyles = useCallback(
			({ pressed }: PressableStateCallbackType) => [
				styles.wrapper,
				{
					backgroundColor: pressed
						? globalStyleProps.style.color.tertiary
						: globalStyleProps.style.color.primary,
				},
			],
			[globalStyleProps],
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
