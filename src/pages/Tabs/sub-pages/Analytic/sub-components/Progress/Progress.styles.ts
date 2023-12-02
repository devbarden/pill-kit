import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		overflow: 'hidden',
		flexDirection: 'row',
		marginHorizontal: 16,
		borderRadius: 16,
		backgroundColor: EnumColor.white,
	},

	label: {
		marginHorizontal: 44,
		position: 'absolute',
		zIndex: 1,
		top: -8,
		maxWidth: '100%',
		flex: 1,

		paddingHorizontal: 8,
		borderRadius: 4,

		backgroundColor: EnumColor.green,
	},

	content: {
		flex: 1,
		paddingRight: 16,
		paddingVertical: 16,
	},

	items: {
		flex: 1,
		justifyContent: 'center',
	},

	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 16,
	},

	name: {
		flex: 1,
		gap: 4,
		flexDirection: 'row',
		alignItems: 'center',
	},

	indicator: {
		width: 8,
		height: 8,
		borderRadius: 8,
	},
})
