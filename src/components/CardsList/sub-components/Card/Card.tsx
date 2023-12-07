import { FC, memo, useCallback, useMemo } from 'react'
import { Pressable } from 'react-native'
import { Box, Text, ITextProps } from 'native-base'

import { TypeMedicine } from '@app/types'
import { EnumCardListMode, EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../../../Icon'
import { useCardState } from './hooks'

import { styles } from './Card.styles'

type TypeProps = {
	data: TypeMedicine
	mode: EnumCardListMode
}

export const Card: FC<TypeProps> = memo(({ data, mode }) => {
	const {
		name,
		type,
		notification,
		howManyToTakeDaily,
		dateText,

		labelText,
		isNeedLabel,

		cardColor,

		onCardPress,
	} = useCardState(data, mode)

	const isModeV1 = useMemo(() => mode === EnumCardListMode.v1, [mode])

	const borderStyles = useMemo(() => ({ borderColor: cardColor }), [cardColor])

	const baseTextProps: ITextProps = useMemo(
		() => ({
			color: EnumColor.black,
			numberOfLines: 1,
			ellipsizeMode: 'tail',
		}),
		[],
	)

	const rightContentStyles = useMemo(
		() => [styles.info, isModeV1 ? styles.flexEnd : styles.justifyCenter],
		[isModeV1],
	)

	const getCardStyles = useCallback(
		() => [styles.card, borderStyles],
		[borderStyles],
	)

	return (
		<Pressable style={getCardStyles} onPress={onCardPress}>
			<Box style={styles.content}>
				<Box style={styles.iconWrapper}>
					<Icon name={EnumIconName[type]} color={cardColor} size={24} />
				</Box>

				<Box style={[styles.info, styles.flexStart]}>
					<Text fontSize="md" {...baseTextProps}>
						{name}
					</Text>

					{isModeV1 && (
						<Text fontSize="xs" {...baseTextProps}>
							{howManyToTakeDaily}
						</Text>
					)}
				</Box>
			</Box>

			<Box style={styles.fullHeight}>
				<Box style={rightContentStyles}>
					{isModeV1 && (
						<Icon
							name={notification ? EnumIconName.bell : EnumIconName.bellOff}
							color={cardColor}
							size={16}
						/>
					)}

					<Text fontSize="xs" {...baseTextProps}>
						{dateText}
					</Text>
				</Box>
			</Box>

			<Box style={styles.leftOverflowLabel} />
			<Box style={styles.rightOverflowLabel} />

			{isNeedLabel && (
				<Box style={[styles.label, borderStyles]}>
					<Text fontSize="xs" {...baseTextProps} color={cardColor}>
						{labelText}
					</Text>
				</Box>
			)}
		</Pressable>
	)
})
