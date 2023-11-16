import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		height: 52,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: COLORS.GREY,
		borderColor: COLORS.DARK_GREY,
		borderTopWidth: 1,
	},
})
