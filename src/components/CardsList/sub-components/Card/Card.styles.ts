import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { CARD_MARGIN } from '@app/constants'

const SPACE = 16
const HALF_SPACE = SPACE / 2
const RADIUS = 12

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
		width: 40,
		height: 40,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},

	content: {
		flex: 1,
		gap: SPACE,
		flexDirection: 'row',
		alignItems: 'center',
	},

	fullHeight: {
		height: '100%',
	},

	info: {
		flex: 1,
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

	label: {
		position: 'absolute',
		top: -8,
		right: 16,
		maxWidth: 160,
		borderRadius: 4,
		paddingHorizontal: HALF_SPACE,
		backgroundColor: EnumColor.white,
	},
})
