import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		overflow: 'hidden',
		marginHorizontal: 16,
		borderRadius: 16,
		backgroundColor: EnumColor.white,
	},

	content: {
		flexDirection: 'row',
	},

	title: {
		flex: 1,
		padding: 16,
		paddingLeft: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},

	info: {
		borderWidth: 1,
		padding: 16,
		gap: 8,
	},

	items: {
		flex: 1,
		paddingBottom: 16,
		paddingHorizontal: 16,
	},

	item: {
		flex: 1,
		gap: 4,
		maxWidth: '70%',
		flexDirection: 'row',
		alignItems: 'center',
	},

	indicator: {
		width: 12,
		height: 12,
		borderRadius: 12,
	},
})
