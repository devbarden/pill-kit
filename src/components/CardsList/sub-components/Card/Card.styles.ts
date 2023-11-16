import { StyleSheet } from 'react-native'

import { CARD_MARGIN_TOP, COLORS } from '@app/constants'

const commonSpace = 16

export const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: commonSpace,
		padding: commonSpace,
		marginTop: CARD_MARGIN_TOP,
		borderRadius: 16,
	},

	content: {
		flex: 1,
		paddingLeft: commonSpace,
		paddingRight: commonSpace * 2,

		borderLeftColor: COLORS.WHITE,
		borderLeftWidth: 1,
	},
})
