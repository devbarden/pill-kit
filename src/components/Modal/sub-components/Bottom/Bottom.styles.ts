import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		height: '80%',
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},

	dash: {
		width: 44,
		height: 6,
		borderRadius: 16,
		backgroundColor: EnumColor.black,
	},

	content: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		gap: 16,
		padding: 16,
		paddingBottom: 0,
	},

	children: {
		flex: 1,
		width: '100%',
	},
})
