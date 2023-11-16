import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	infoWrapper: {
		flex: 1,
		justifyContent: 'center',
	},

	info: {
		gap: 16,
		alignItems: 'center',
		alignSelf: 'center',
	},

	buttonWrapper: {
		gap: 8,
		padding: 16,
		borderRadius: 24,
		backgroundColor: COLORS.RED,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
