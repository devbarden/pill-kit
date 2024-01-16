import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	action: {
		padding: 8,
	},

	pressed: {
		borderRadius: 24,
		backgroundColor: EnumColor.lightGrey,
	},

	inputWrapper: {
		paddingVertical: 8,
		paddingHorizontal: 12,
	},

	input: {
		fontSize: 16,
	},
})
