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
		borderTopWidth: HALF_SPACE,
		backgroundColor: EnumColor.white,
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

	label: {
		position: 'absolute',
		top: -SPACE,
		right: 0,

		maxWidth: 160,

		paddingHorizontal: HALF_SPACE,

		borderTopLeftRadius: RADIUS,
		borderTopRightRadius: RADIUS,

		backgroundColor: EnumColor.white,
	},
})
