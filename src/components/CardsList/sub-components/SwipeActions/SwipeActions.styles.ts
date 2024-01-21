import { StyleSheet } from 'react-native'

import { CARD_MARGIN } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		marginTop: CARD_MARGIN,
		marginHorizontal: CARD_MARGIN,
		borderRadius: 4,
	},

	leftAction: {
		paddingLeft: 16,
		paddingRight: 24,
	},

	rightAction: {
		paddingLeft: 24,
		paddingRight: 16,
	},
})
