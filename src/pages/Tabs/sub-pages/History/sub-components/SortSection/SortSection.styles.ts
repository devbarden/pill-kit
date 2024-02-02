import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export type TypeStyleProps = {
	isLanguageRTL: boolean
}

export const styles = ({ isLanguageRTL }: TypeStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		maxWidthHalfOfRow: {
			maxWidth: '50%',
		},

		sort: {
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 8,
			paddingVertical: 6,
			paddingHorizontal: 12,
			borderRadius: 12,
			backgroundColor: EnumColor.white,
		},

		pressed: {
			backgroundColor: EnumColor.lightGrey,
		},
	})
