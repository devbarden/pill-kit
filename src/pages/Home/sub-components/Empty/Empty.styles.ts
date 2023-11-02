import { StyleSheet } from 'react-native'

import { colors } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		gap: 16,
	},
	infoBlock: {
		flex: 1,
		gap: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonWrapper: {
		gap: 8,
		padding: 16,
		borderRadius: 24,
		backgroundColor: colors.red,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
