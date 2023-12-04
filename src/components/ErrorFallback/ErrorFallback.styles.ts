import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		gap: 16,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: EnumColor.grey,
	},
})
