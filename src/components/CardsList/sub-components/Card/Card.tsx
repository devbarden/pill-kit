import { FC, memo, useMemo } from 'react'
import { Pressable, Box, Text, ITextProps } from 'native-base'

import { TypeMedicine } from '@app/types'
import { EnumColor } from '@app/enums'

import { useCardState } from './hooks'
import { styles } from './Card.styles'

type TypeProps = {
	data: TypeMedicine
}

export const Card: FC<TypeProps> = memo(({ data }) => {
	const {
		name,
		isPast,
		cardColor,
		dateToShow,
		onCardPress,
		medicineIcon,
		notificationIcon,
		howManyToTakeDaily,
	} = useCardState(data)

	const cardStyles = useMemo(
		() => [styles.card, { backgroundColor: cardColor }],
		[cardColor],
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
				<Text fontSize="xs" {...baseTextProps}>
					{howManyToTakeDaily}
				</Text>
				<Text fontSize="xs" {...baseTextProps}>
					{dateToShow}
				</Text>
			</Box>
			{!isPast && notificationIcon}
		</Pressable>
	)
})
