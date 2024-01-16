import { StyleSheet } from 'react-native'

import { IS_ANDROID } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingTop: 16,
		paddingBottom: IS_ANDROID ? 16 : 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
