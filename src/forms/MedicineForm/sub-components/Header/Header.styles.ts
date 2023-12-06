import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 16,
	},

	backAction: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		gap: 16,
		paddingVertical: 8,
	},

	saveAction: {
		paddingVertical: 8,
		paddingLeft: 16,
	},

	title: {
		flex: 1,
	},
})
