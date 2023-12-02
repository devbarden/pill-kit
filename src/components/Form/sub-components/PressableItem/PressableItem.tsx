import {
	FC,
	memo,
	useMemo,
	useCallback,
	ReactElement,
	isValidElement,
} from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles } from './PressableItem.styles'

type TypeProps = {
	text: string
	value?: ReactElement | string
	handler?: () => void
	iconName?: EnumIconName
	iconColor?: EnumColor
	withoutChevronRight?: boolean
}

export const PressableItem: FC<TypeProps> = memo(
	({
		text,
		value,
		handler,
		iconName,
		iconColor = EnumColor.darkGrey,
		withoutChevronRight = false,
	}) => {
		const isValueString = useMemo(() => typeof value === 'string', [value])

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

				<Box style={value ? styles.partlyWidth : {}}>
					<Box style={styles.value}>
						{!withoutChevronRight && (
							<Icon
								size={20}
								name={EnumIconName.right}
								color={EnumColor.darkGrey}
							/>
						)}
						{isValidElement(value) && value}
						{isValueString && (
							<Box style={styles.fullFlex}>
								<Text
									numberOfLines={1}
									textAlign="right"
									color={EnumColor.darkGrey}
									style={styles.text}>
									{value}
								</Text>
							</Box>
						)}
					</Box>
				</Box>
			</Pressable>
		)
	},
)
