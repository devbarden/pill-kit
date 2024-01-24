import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export type TypeStyleProps = {
	isArabic: boolean
}

export const styles = ({ isArabic }: TypeStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			gap: 16,
		},

		item: {
			padding: 16,
			borderRadius: 16,
			backgroundColor: EnumColor.white,
		},

		content: {
			flexDirection: isArabic ? 'row-reverse' : 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
			gap: 16,
		},

		info: {
			flexDirection: isArabic ? 'row-reverse' : 'row',
			alignItems: 'center',
			gap: 8,
			paddingRight: 8,
			flex: 1,
		},
	})
