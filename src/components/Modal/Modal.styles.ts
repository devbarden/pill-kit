import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: -1,
	},

	wrapper: {
		width: '100%',
		borderRadius: 16,
		backgroundColor: COLORS.GREY,
	},

	title: {
		padding: 16,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: COLORS.DARK_GREY,
	},

	content: {
		paddingHorizontal: 16,
	},

	actions: {
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: COLORS.DARK_GREY,
	},

	action: {
		flex: 1,
		padding: 16,
	},

	bottomLeftRadius: {
		borderBottomLeftRadius: 16,
	},

	bottomRightRadius: {
		borderBottomRightRadius: 16,
	},

	separator: {
		borderRightWidth: 1,
		borderColor: COLORS.DARK_GREY,
	},
})
