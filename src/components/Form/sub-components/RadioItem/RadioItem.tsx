import * as Haptics from 'expo-haptics'
import { FC, memo, useMemo, useCallback } from 'react'
import {
	Pressable,
	TouchableWithoutFeedback,
	PressableStateCallbackType,
} from 'react-native'
import { Box, Radio, Text } from 'native-base'

import { useGlobalContext } from '@app/hooks'
import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles } from './RadioItem.styles'

type TypeProps = {
	text: string
	value: string
	handler: () => void
	iconName?: EnumIconName
	iconColor?: EnumColor
}

export const RadioItem: FC<TypeProps> = memo(
	({ text, value, handler, iconName, iconColor = EnumColor.darkGrey }) => {
		const { globalStyleProps } = useGlobalContext()

		const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

		const getPressableStyles = useCallback(
			({ pressed }: PressableStateCallbackType) => [
				style.wrapper,
				{
					backgroundColor: pressed ? EnumColor.lightGrey : EnumColor.white,
				},
			],
			[style],
		)

		const pressHandler = useCallback(() => {
			Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
			handler()
		}, [handler])

		return (
			<Pressable style={getPressableStyles} onPress={pressHandler}>
				<Box style={style.fullFlex}>
					<Box style={style.titleWrapper}>
						{iconName && <Icon name={iconName} color={iconColor} size={20} />}
						<Box style={style.title}>
							<Text numberOfLines={1} style={style.text}>
								{text}
							</Text>
						</Box>
					</Box>
				</Box>

				<TouchableWithoutFeedback style={style.children} onPress={pressHandler}>
					<Radio colorScheme="green" value={value} accessibilityLabel={value} />
				</TouchableWithoutFeedback>
			</Pressable>
		)
	},
)
