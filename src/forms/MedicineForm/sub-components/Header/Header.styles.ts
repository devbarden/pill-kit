import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { IS_ANDROID, SAFE_ANDROID_BAR_HEIGHT } from '@app/constants'

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
		paddingTop: IS_ANDROID ? SAFE_ANDROID_BAR_HEIGHT : 8,
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
