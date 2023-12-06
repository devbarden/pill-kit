import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: EnumColor.white,
		borderColor: EnumColor.lightGrey,
		borderTopWidth: 1,
	},
})
