import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export type TypeStyleProps = {
	isLanguageRTL: boolean
}

export const styles = ({ isLanguageRTL }: TypeStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-around',
			backgroundColor: EnumColor.white,
			borderColor: EnumColor.lightGrey,
			borderTopWidth: 1,
		},
	})
