import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		gap: 16,
	},

	item: {
		padding: 16,
		borderRadius: 16,
		backgroundColor: EnumColor.grey,
	},

	pressedBg: {
		backgroundColor: EnumColor.transparentGrey,
	},

	defaultBg: {
		backgroundColor: EnumColor.grey,
	},
})
