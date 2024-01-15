import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		gap: 32,
		margin: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	logo: {
		flex: 1,
		gap: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},

	checkbox: {
		gap: 16,
	},

	agreement: {
		width: '100%',
		gap: 8,
	},

	fullFlex: {
		flex: 1,
	},

	link: {
		textDecorationLine: 'underline',
		color: EnumColor.blue,
	},

	btn: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 12,
	},
})
