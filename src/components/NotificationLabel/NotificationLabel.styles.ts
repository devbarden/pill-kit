import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1,
		gap: 16,
		padding: 16,
		borderRadius: 12,
		backgroundColor: EnumColor.white,
	},

	text: {
		flex: 1,
	},
})
