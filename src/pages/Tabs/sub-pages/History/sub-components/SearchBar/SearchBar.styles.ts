import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

const commonSpace = 8
const badgeSize = 10

export const styles = StyleSheet.create({
	actionsWrapper: {
		flexDirection: 'row',
	},

	action: {
		padding: commonSpace,
	},

	badge: {
		zIndex: 1,
		position: 'absolute',
		right: 0,
		top: 0,
		height: badgeSize * 2,
		width: badgeSize * 2,
		borderRadius: badgeSize * 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: EnumColor.red,
	},

	badgeText: {
		color: EnumColor.white,
		fontSize: badgeSize,
		textAlign: 'center',
	},

	pressed: {
		borderRadius: badgeSize * 2,
		backgroundColor: EnumColor.lightGrey,
	},
})
