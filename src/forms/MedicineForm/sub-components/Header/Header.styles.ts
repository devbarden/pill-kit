import { EnumColor } from '@app/enums'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: 16,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderColor: EnumColor.transparentGrey,
		backgroundColor: EnumColor.grey,
	},

	backAction: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		gap: 16,
		paddingVertical: 8,
	},

	saveAction: {
		paddingVertical: 8,
		paddingLeft: 16,
	},

	title: {
		flex: 1,
	},
})
