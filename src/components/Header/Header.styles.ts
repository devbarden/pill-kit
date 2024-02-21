import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderColor: EnumColor.lightGrey,
		backgroundColor: EnumColor.white,
	},

	back: {
		paddingRight: 8,
		height: '100%',
	},

	action: {
		paddingLeft: 8,
		height: '100%',
	},

	title: {
		flex: 1,
	},
})
