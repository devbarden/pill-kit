import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		maxHeight: '50%',
		borderRadius: 16,
		backgroundColor: EnumColor.grey,
	},

	title: {
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: EnumColor.darkGrey,
	},

	actions: {
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: EnumColor.darkGrey,
	},

	separator: {
		borderRightWidth: 1,
		borderColor: EnumColor.darkGrey,
	},

	fullScreen: {
		flex: 1,
		marginTop: 80,
		marginBottom: 66,
		maxHeight: '100%',
	},

	fullFlex: {
		flex: 1,
	},

	paddingVertical: {
		paddingVertical: 16,
	},

	paddingHorizontal: {
		paddingHorizontal: 16,
	},

	pressedBg: {
		backgroundColor: EnumColor.transparentGrey,
	},

	defaultBg: {
		backgroundColor: EnumColor.grey,
	},

	bottomLeftRadius: {
		borderBottomLeftRadius: 16,
	},

	bottomRightRadius: {
		borderBottomRightRadius: 16,
	},
})
