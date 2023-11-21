import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		gap: 16,
		padding: 16,
		borderTopWidth: 1,
		borderColor: EnumColor.darkGrey,
		backgroundColor: EnumColor.grey,
	},
})
