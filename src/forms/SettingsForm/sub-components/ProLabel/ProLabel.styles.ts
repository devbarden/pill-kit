import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		height: 36,
		width: 144,
		marginVertical: 16,
	},

	gradient: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 24,
	},

	text: {
		color: COLORS.WHITE,
		fontWeight: 'bold',
	},

	star: {
		position: 'absolute',
	},
})
