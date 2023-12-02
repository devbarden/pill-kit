import { FC, memo, useMemo } from 'react'
import { Pressable, Box, Text, ITextProps } from 'native-base'

import { TypeMedicine } from '@app/typess'
import { EnumCardListMode, EnumColor } from '@app/enums'

import { useCardState } from './hooks'
import { styles } from './Card.styles'

type TypeProps = {
	data: TypeMedicine
	mode: EnumCardListMode
}

export const Card: FC<TypeProps> = memo(({ data, mode }) => {
	const {
		isPast,

		name,
		howManyToTakeDaily,
		dateText,

		labelText,
		isNeedLabel,

		medicineIcon,
		notificationIcon,

		cardColor,
		borderCardColorStyle,
		backgroundCardColorStyle,

		onCardPress,
	} = useCardState(data, mode)

	const cardStyles = useMemo(
		() => [styles.card, backgroundCardColorStyle],
		[backgroundCardColorStyle],
	)

	const baseTextProps: ITextProps = useMemo(
		() => ({
			color: EnumColor.white,
			numberOfLines: 1,
			ellipsizeMode: 'tail',
		}),
		[],
	)

	return (
		<Pressable style={cardStyles} onPress={onCardPress}>
			<Box style={styles.iconWrapper}>{medicineIcon}</Box>

			<Box style={styles.content}>
				<Text fontSize="lg" {...baseTextProps}>
					{name}
				</Text>

				{mode === EnumCardListMode.v1 && (
					<Text fontSize="xs" {...baseTextProps}>
						{howManyToTakeDaily}
					</Text>
				)}

				<Text fontSize="xs" {...baseTextProps}>
					{dateText}
				</Text>
			</Box>

			{!isPast && notificationIcon}

			{isNeedLabel && (
				<Box style={[styles.label, borderCardColorStyle]}>
					<Text fontSize="xs" {...baseTextProps} color={cardColor}>
						{labelText}
					</Text>
				</Box>
			)}
		</Pressable>
	)
})
