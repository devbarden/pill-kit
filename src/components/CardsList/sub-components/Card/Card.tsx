import { FC, memo, useMemo } from 'react'
import { Pressable } from 'react-native'
import { Box, Text, ITextProps } from 'native-base'

import { TypeMedicine } from '@app/types'
import { useGlobalContext } from '@app/hooks'
import { getNumberByLocale } from '@app/utils'
import { EnumColor, EnumIconName, EnumCardListMode } from '@app/enums'

import { Icon } from '../../../Icon'
import { useCardState } from './hooks'

import { styles } from './Card.styles'

type TypeProps = {
	data: TypeMedicine
	mode: EnumCardListMode
	drag?: () => void
}

export const Card: FC<TypeProps> = memo(({ data, mode, drag }) => {
	const { locale, globalStyleProps } = useGlobalContext()
	const {
		isModeV1,
		isModeV2,

		name,
		type,
		transformedCountPerUse,
		countPerDay,
		notification,
		dateText,

		labelText,

		cardColor,

		onCardPress,
	} = useCardState(data, mode)

	const baseTextProps: ITextProps = useMemo(
		() => ({
			color: globalStyleProps.style.color.invert,
			numberOfLines: 1,
			ellipsizeMode: 'tail',
		}),
		[globalStyleProps],
	)

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const backgroundCardColorStyle = useMemo(
		() => ({ backgroundColor: cardColor }),
		[cardColor],
	)

	return (
		<Pressable style={style.card} onPress={onCardPress} onLongPress={drag}>
			<Box style={style.content}>
				<Box style={style.iconWrapper}>
					<Icon name={EnumIconName[type]} color={cardColor} size={28} />
				</Box>

				<Box style={style.info}>
					<Text fontSize="md" {...baseTextProps}>
						{name}
					</Text>

					{isModeV2 && (
						<Text fontSize="xs" {...baseTextProps}>
							{dateText}
						</Text>
					)}
				</Box>

				<Icon
					name={notification ? EnumIconName.bell : EnumIconName.bellOff}
					color={cardColor}
					size={16}
				/>
			</Box>

			{isModeV1 && (
				<Box style={[style.leftLabel, backgroundCardColorStyle]}>
					<Text fontSize="xs" {...baseTextProps} color={EnumColor.white}>
						{transformedCountPerUse && transformedCountPerUse + ' / '}
						{getNumberByLocale(countPerDay, locale)}
					</Text>
				</Box>
			)}

			<Box style={[style.rightLabel, backgroundCardColorStyle]}>
				<Text fontSize="xs" {...baseTextProps} color={EnumColor.white}>
					{isModeV1 ? dateText : labelText}
				</Text>
			</Box>
		</Pressable>
	)
})
