import { FC, memo, useMemo } from 'react'
import { Pressable, Box, Text, ITextProps } from 'native-base'

import { Medicine } from '@app/types'
import { COLORS } from '@app/constants'

import { useCardState } from './hooks'
import { styles } from './Card.styles'

interface Props {
	data: Medicine
}

export const Card: FC<Props> = memo(({ data }) => {
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
			color: COLORS.WHITE,
			numberOfLines: 1,
			ellipsizeMode: 'tail',
		}),
		[],
	)

	return (
		<Pressable style={cardStyles} onPress={onCardPress}>
			{medicineIcon}
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
