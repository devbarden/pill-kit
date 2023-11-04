import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	card: {
		padding: 12,
		borderRadius: 4,
		backgroundColor: COLORS.RED,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		maxWidth: '50%',
		overflow: 'hidden',
	},
})
