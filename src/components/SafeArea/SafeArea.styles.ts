import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { IS_ANDROID, SAFE_ANDROID_BAR_HEIGHT } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: EnumColor.white,
		paddingTop: IS_ANDROID ? SAFE_ANDROID_BAR_HEIGHT : 0,
	},
})
