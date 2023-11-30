import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { CARD_MARGIN } from '@app/constants'

const commonSpace = 16

export const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: commonSpace,
		padding: commonSpace,
		marginTop: CARD_MARGIN,
		marginHorizontal: CARD_MARGIN,
		borderRadius: 16,
	},

	iconWrapper: {
		width: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},

	content: {
		flex: 1,
		paddingRight: commonSpace * 2,
	},

	label: {
		position: 'absolute',
		top: -8,
		right: 46,

		maxWidth: 120,

		paddingVertical: 2,
		paddingHorizontal: 8,

		borderWidth: 1,
		borderRadius: 4,

		backgroundColor: EnumColor.white,
	},
})
