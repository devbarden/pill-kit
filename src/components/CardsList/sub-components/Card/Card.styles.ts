import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { CARD_MARGIN } from '@app/constants'

const SPACE = 16
const HALF_SPACE = SPACE / 2
const RADIUS = 4

export const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: SPACE,
		padding: SPACE,
		marginTop: CARD_MARGIN,
		marginHorizontal: CARD_MARGIN,
		borderRadius: RADIUS,
		borderTopWidth: RADIUS,
		backgroundColor: EnumColor.white,

		shadowColor: EnumColor.darkGrey,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},

	iconWrapper: {
		width: 24,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},

	content: {
		flex: 1,
		gap: SPACE,
		flexDirection: 'row',
	},

	fullHeight: {
		height: '100%',
	},

	info: {
		flex: 1,
		gap: HALF_SPACE,
		justifyContent: 'space-between',
	},

	flexStart: {
		alignItems: 'flex-start',
	},

	flexEnd: {
		alignItems: 'flex-end',
	},

	justifyCenter: {
		justifyContent: 'center',
	},

	leftOverflowLabel: {
		position: 'absolute',
		top: 0,
		left: 0,

		height: SPACE,
		width: RADIUS,
		backgroundColor: EnumColor.white,
	},

	rightOverflowLabel: {
		position: 'absolute',
		top: 0,
		right: 0,

		height: SPACE,
		width: RADIUS,
		backgroundColor: EnumColor.white,
	},

	label: {
		position: 'absolute',
		top: -12,
		right: 0,

		maxWidth: 160,

		paddingHorizontal: HALF_SPACE,

		borderTopLeftRadius: RADIUS,
		borderTopRightRadius: RADIUS,

		backgroundColor: EnumColor.white,
	},
})
