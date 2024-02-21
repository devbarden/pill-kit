import { StyleSheet } from 'react-native'

import { IS_ANDROID } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {},

	modal: {
		borderTopLeftRadius: IS_ANDROID ? 0 : 24,
		borderTopRightRadius: IS_ANDROID ? 0 : 24,
	},
})
