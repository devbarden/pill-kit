import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		height: 52,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: EnumColor.grey,
		borderColor: EnumColor.darkGrey,
		borderTopWidth: 1,
	},
})
