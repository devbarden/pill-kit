import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		gap: 16,
		padding: 16,
		borderTopWidth: 1,
		borderColor: COLORS.DARK_GREY,
		backgroundColor: COLORS.GREY,
	},
})
