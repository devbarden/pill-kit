import { StyleSheet } from 'react-native'

import { CARD_HEIGHT, COLORS } from '@app/constants'

const commonSpace = 16

export const styles = StyleSheet.create({
	card: {
		height: CARD_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: commonSpace,
		padding: commonSpace,
		marginBottom: commonSpace,
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
