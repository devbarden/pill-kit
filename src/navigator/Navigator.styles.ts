import { StyleSheet } from 'react-native'

import { IS_ANDROID, SAFE_ANDROID_BAR_HEIGHT } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {},

	modal: {
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
		marginTop: IS_ANDROID ? SAFE_ANDROID_BAR_HEIGHT : 0,
	},
})
