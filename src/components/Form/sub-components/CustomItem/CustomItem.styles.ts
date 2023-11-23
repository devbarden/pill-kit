import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
		gap: 16,
		height: 54,
	},

	fullFlex: {
		flex: 1,
	},

	title: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},

	children: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
	},

	text: {
		fontSize: 16,
	},
})
