import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		marginLeft: 8,
	},

	link: {
		color: EnumColor.blue,
	},
})
