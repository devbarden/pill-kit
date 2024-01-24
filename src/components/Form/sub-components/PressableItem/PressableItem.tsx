import {
	FC,
	memo,
	useMemo,
	useCallback,
	ReactElement,
	isValidElement,
} from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName, EnumLanguageCode } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles, TypeStyleProps } from './PressableItem.styles'

type TypeProps = {
	text: string
	value?: ReactElement | string
	handler?: () => void
	iconName?: EnumIconName
	iconColor?: EnumColor
	withoutChevronRight?: boolean
	isValueQuarterWidth?: boolean
}

export const PressableItem: FC<TypeProps> = memo(
	({
		text,
		value,
		handler,
		iconName,
		iconColor = EnumColor.darkGrey,
		withoutChevronRight = false,
		isValueQuarterWidth = false,
	}) => {
		const { i18n } = useTranslation()

		const isArabic = useMemo(
			() => i18n.language === EnumLanguageCode.ar,
			[i18n.language],
		)

		const isValueString = useMemo(() => typeof value === 'string', [value])

		const styleProps: TypeStyleProps = useMemo(
			() => ({
				isArabic,
			}),
			[isArabic],
		)

		const style = useMemo(() => styles(styleProps), [styleProps])

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
					backgroundColor: pressed ? EnumColor.lightGrey : EnumColor.white,
				},
			],
			[style],
		)

		return (
			<Pressable style={getPressableStyles} onPress={handler}>
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

				<Box style={value ? valueWidth : {}}>
					<Box style={style.valueWrapper}>
						{!withoutChevronRight && (
							<Icon
								size={20}
								name={isArabic ? EnumIconName.left : EnumIconName.right}
								color={EnumColor.darkGrey}
							/>
						)}
						{isValidElement(value) && value}
						{isValueString && (
							<Box style={style.value}>
								<Text
									numberOfLines={1}
									textAlign="right"
									color={EnumColor.darkGrey}
									style={style.text}>
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
