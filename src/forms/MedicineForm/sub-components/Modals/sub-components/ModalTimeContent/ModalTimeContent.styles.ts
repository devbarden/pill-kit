import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export type TypeStyleProps = {
	isLanguageRTL: boolean
}

export const styles = ({ isLanguageRTL }: TypeStyleProps) =>
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
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
			gap: 16,
		},

		info: {
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
			gap: 8,
			paddingRight: 8,
			flex: 1,
		},
	})
