import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderColor: COLORS.DARK_GREY,
		backgroundColor: COLORS.GREY,
	},

	back: {
		paddingRight: 32,
		height: '100%',
	},

	action: {
		paddingLeft: 32,
		height: '100%',
	},

	title: {
		flex: 1,
		paddingBottom: 16,
	},
})
