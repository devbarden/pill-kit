import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	item: {
		gap: 8,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},

	text: {
		width: '40%',
		fontSize: 16,
		paddingVertical: 16,
	},

	value: {
		flex: 1,
		paddingRight: 16,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
})
