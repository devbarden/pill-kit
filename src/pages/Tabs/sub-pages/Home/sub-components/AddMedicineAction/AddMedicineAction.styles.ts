import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		gap: 8,
		paddingLeft: 16,
		paddingBottom: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: EnumColor.white,
	},
})
