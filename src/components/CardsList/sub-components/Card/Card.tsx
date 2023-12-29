import { FC, memo, useCallback, useMemo } from 'react'
import { Pressable } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Box, Text, ITextProps } from 'native-base'

import { TypeMedicine } from '@app/types'
import { CARD_MARGIN } from '@app/constants'
import { EnumCardListMode, EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../../../Icon'
import { useCardState } from './hooks'

import { styles } from './Card.styles'

type TypeProps = {
	data: TypeMedicine
	mode: EnumCardListMode
	isLast: boolean
}

export const Card: FC<TypeProps> = memo(({ data, mode, isLast }) => {
	const { t } = useTranslation()
	const {
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

	const isModeV1 = useMemo(() => mode === EnumCardListMode.v1, [mode])
	const isModeV2 = useMemo(() => mode === EnumCardListMode.v2, [mode])

	const borderStyles = useMemo(() => ({ borderColor: cardColor }), [cardColor])

	const baseTextProps: ITextProps = useMemo(
		() => ({
			color: EnumColor.black,
			numberOfLines: 1,
			ellipsizeMode: 'tail',
		}),
		[],
	)

	const getCardStyles = useCallback(
		() => [
			styles.card,
			borderStyles,
			{ marginBottom: isLast ? CARD_MARGIN : 0 },
		],
		[borderStyles, isLast],
	)

	return (
		<Pressable style={getCardStyles} onPress={onCardPress}>
			<Box style={styles.content}>
				<Box style={styles.iconWrapper}>
					<Icon name={EnumIconName[type]} color={cardColor} size={28} />
				</Box>

				<Box style={styles.info}>
					<Text fontSize="md" {...baseTextProps}>
						{name}
					</Text>

					{isModeV1 && transformedCountPerUse && (
						<Text fontSize="xs" {...baseTextProps}>
							{t('card:dose')}: {transformedCountPerUse}
						</Text>
					)}

					{isModeV1 && (
						<Text fontSize="xs" {...baseTextProps}>
							{t('card:perDay')}: {countPerDay}
						</Text>
					)}

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

			<Box style={[styles.label, { backgroundColor: cardColor }]}>
				<Text fontSize="xs" {...baseTextProps} color={EnumColor.white}>
					{isModeV1 ? dateText : labelText}
				</Text>
			</Box>
		</Pressable>
	)
})
