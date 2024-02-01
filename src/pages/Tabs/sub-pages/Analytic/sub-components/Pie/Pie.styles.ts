import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export type TypeStyleProps = {
	isLanguageRTL: boolean
}

export const styles = ({ isLanguageRTL }: TypeStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			overflow: 'hidden',
			marginHorizontal: 16,
			borderRadius: 12,
			backgroundColor: EnumColor.white,
		},

		content: {
			flexDirection: 'row',
		},

		title: {
			flex: 1,
			padding: 16,
			paddingLeft: 0,
			justifyContent: 'center',
			alignItems: 'center',
		},

		info: {
			borderWidth: 1,
			padding: 16,
			gap: 8,
		},

		items: {
			flex: 1,
			alignItems: isLanguageRTL ? 'flex-end' : 'flex-start',
			paddingBottom: 16,
			paddingHorizontal: 16,
		},

		item: {
			flex: 1,
			gap: 4,
			maxWidth: '70%',
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
		},

		indicator: {
			width: 12,
			height: 12,
			borderRadius: 12,
		},
	})
