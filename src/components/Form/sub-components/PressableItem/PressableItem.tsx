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

import { TypeColor } from '@app/types'
import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { Icon } from '../../../Icon'

import { styles } from './PressableItem.styles'

type TypeProps = {
	text: string
	value?: ReactElement | string
	handler?: () => void
	iconName?: EnumIconName
	iconColor?: TypeColor
	withoutChevronRight?: boolean
	isValueQuarterWidth?: boolean
}

export const PressableItem: FC<TypeProps> = memo(
	({
		text,
		value,
		handler,
		iconName,
		iconColor,
		withoutChevronRight = false,
		isValueQuarterWidth = false,
	}) => {
		const { globalStyleProps, isLocaleRTL } = useGlobalContext()

		const arrowIcon = useMemo(
			() => (isLocaleRTL ? EnumIconName.left : EnumIconName.right),
			[isLocaleRTL],
		)

		const isValueString = useMemo(() => typeof value === 'string', [value])

		const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

		const valueWidth = useMemo(
			() => [
				isValueQuarterWidth ? style.valueQuarterWidth : style.valueHalfWidth,
			],
			[style, isValueQuarterWidth],
		)

		const getPressableStyles = useCallback(
			({ pressed }: PressableStateCallbackType) => [
				style.wrapper,
				{
					backgroundColor: pressed
						? globalStyleProps.style.color.tertiary
						: globalStyleProps.style.color.primary,
				},
			],
			[style, globalStyleProps],
		)

		return (
			<Pressable style={getPressableStyles} onPress={handler}>
				<Box style={style.fullFlex}>
					<Box style={style.titleWrapper}>
						{iconName && (
							<Icon
								name={iconName}
								color={iconColor ?? globalStyleProps.style.color.highlight}
								size={20}
							/>
						)}
						<Box style={style.title}>
							<Text
								numberOfLines={1}
								style={style.text}
								color={globalStyleProps.style.color.invert}>
								{text}
							</Text>
						</Box>
					</Box>
				</Box>

				<Box style={value ? valueWidth : {}}>
					<Box style={style.valueWrapper}>
						{!withoutChevronRight && (
							<Icon
								size={20}
								name={arrowIcon}
								color={globalStyleProps.style.color.highlight}
							/>
						)}
						{isValidElement(value) && value}
						{isValueString && (
							<Box style={style.value}>
								<Text
									numberOfLines={1}
									textAlign="right"
									style={style.text}
									color={globalStyleProps.style.color.highlight}>
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
