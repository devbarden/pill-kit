import { StyleSheet } from 'react-native'

import { CARD_MARGIN } from '@app/constants'
import { TypeGlobalStyleProps } from '@app/types'

const SPACE = 16
const HALF_SPACE = SPACE / 2
const RADIUS = 12

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		card: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			gap: SPACE,
			padding: SPACE,
			marginTop: CARD_MARGIN,
			marginHorizontal: CARD_MARGIN,
			borderRadius: RADIUS,
			backgroundColor: style.color.primary,
		},

		iconWrapper: {
			width: 32,
			height: 32,
			justifyContent: 'center',
			alignItems: 'center',
		},

		content: {
			flex: 1,
			gap: HALF_SPACE,
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
		},

		info: {
			flex: 1,
			justifyContent: 'space-between',
			alignItems: isLocaleRTL ? 'flex-end' : 'flex-start',
		},

		leftLabel: {
			position: 'absolute',
			top: -8,
			left: 16,
			paddingHorizontal: 8,
			borderRadius: 4,
		},

		rightLabel: {
			position: 'absolute',
			top: -8,
			right: 16,
			maxWidth: 160,
			borderRadius: 4,
			paddingHorizontal: HALF_SPACE,
		},
	})
