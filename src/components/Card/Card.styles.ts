import { StyleSheet } from 'react-native'

import { colors } from '@app/constants'

export const styles = StyleSheet.create({
	card: {
		padding: 12,
		borderRadius: 4,
		backgroundColor: colors.red,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		maxWidth: '50%',
		overflow: 'hidden',
	},
})
