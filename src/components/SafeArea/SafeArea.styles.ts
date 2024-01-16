import { StatusBar, StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { IS_ANDROID } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: EnumColor.white,
		paddingTop: IS_ANDROID ? StatusBar.currentHeight : 0,
	},
})
