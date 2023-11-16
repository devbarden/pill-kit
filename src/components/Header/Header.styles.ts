import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		borderBottomWidth: 1,
		borderColor: COLORS.DARK_GREY,
		backgroundColor: COLORS.GREY,
	},

	back: {
		position: 'absolute',
		left: 0,
		paddingVertical: 8,
		paddingHorizontal: 16,
	},

	action: {
		position: 'absolute',
		right: 0,
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
})
