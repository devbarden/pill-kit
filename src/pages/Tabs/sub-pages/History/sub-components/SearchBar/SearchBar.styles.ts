import { StyleSheet } from 'react-native'

import { COLORS } from '@app/constants'

const commonSpace = 8
const badgeSize = 10

export const styles = StyleSheet.create({
	actionsWrapper: {
		flexDirection: 'row',
		gap: commonSpace,
		padding: commonSpace,
	},

	badge: {
		zIndex: 1,
		position: 'absolute',
		right: -commonSpace,
		top: -commonSpace,
		height: badgeSize * 2,
		width: badgeSize * 2,
		borderRadius: badgeSize * 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.RED,
	},

	badgeText: {
		color: COLORS.WHITE,
		fontSize: badgeSize,
	},
})
