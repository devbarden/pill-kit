import { StyleSheet } from 'react-native'

import { colors } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'space-between',
	},
	infoBlock: {
		flex: 1,
		gap: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonWrapper: {
		gap: 8,
		margin: 32,
		padding: 16,
		borderRadius: 24,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: colors.red,
	},
})
