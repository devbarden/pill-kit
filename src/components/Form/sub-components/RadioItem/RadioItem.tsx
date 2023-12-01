import { FC, memo, useCallback } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Radio, Text } from 'native-base'

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
				<Box style={styles.fullFlex}>
					<Box style={styles.title}>
						{iconName && <Icon name={iconName} color={iconColor} size={20} />}
						<Box style={styles.fullFlex}>
							<Text numberOfLines={1} style={styles.text}>
								{text}
							</Text>
						</Box>
					</Box>
				</Box>

				<Box style={styles.children}>
					<Radio accessibilityLabel={value} value={value} />
				</Box>
			</Pressable>
		)
	},
)
