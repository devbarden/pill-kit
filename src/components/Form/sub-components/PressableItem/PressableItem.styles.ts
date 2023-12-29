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

	valueHalfWidth: {
		width: '50%',
	},

	valueQuarterWidth: {
		width: '25%',
	},

	title: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},

	value: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		gap: 16,
	},

	text: {
		fontSize: 16,
	},
})
