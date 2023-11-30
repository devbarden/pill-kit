import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	maxWidthHalfOfRow: {
		maxWidth: '50%',
	},

	sort: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 8,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 12,
		backgroundColor: EnumColor.white,
	},

	pressed: {
		backgroundColor: EnumColor.lightGrey,
	},
})
