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
		paddingLeft: commonSpace,
		paddingRight: commonSpace * 2,

		borderLeftColor: EnumColor.white,
		borderLeftWidth: 1,
	},
})
