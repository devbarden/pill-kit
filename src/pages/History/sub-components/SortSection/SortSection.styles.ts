import { COLORS } from '@app/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 16,
	},

	sort: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 8,
		paddingVertical: 8,
		paddingHorizontal: 24,
		borderRadius: 12,
		backgroundColor: COLORS.WHITE,
	},
})
