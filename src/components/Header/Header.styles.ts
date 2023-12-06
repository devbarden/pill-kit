import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		borderColor: EnumColor.lightGrey,
		backgroundColor: EnumColor.white,
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
		paddingBottom: 8,
	},
})
