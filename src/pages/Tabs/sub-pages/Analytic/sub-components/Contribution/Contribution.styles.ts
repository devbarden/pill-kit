import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		overflow: 'hidden',
		padding: 16,
		borderRadius: 12,
		marginHorizontal: 16,
		backgroundColor: EnumColor.white,
	},

	content: {
		flex: 1,
		flexDirection: 'row',
		overflow: 'hidden',
		justifyContent: 'space-between',
	},

	info: {
		flex: 1,
		justifyContent: 'center',
	},
})
