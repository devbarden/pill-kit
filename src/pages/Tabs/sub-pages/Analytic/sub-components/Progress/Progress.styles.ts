import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			overflow: 'hidden',
			flexDirection: 'row',
			marginHorizontal: 16,
			borderRadius: 12,
			backgroundColor: EnumColor.white,
		},

		label: {
			marginHorizontal: 44,
			position: 'absolute',
			zIndex: 1,
			top: -10,
			maxWidth: '100%',
			flex: 1,

			paddingHorizontal: 12,
			borderRadius: 4,

			backgroundColor: EnumColor.green,
		},

		content: {
			flex: 1,
			gap: 16,
			paddingRight: 16,
			paddingVertical: 16,
		},

		items: {
			flex: 1,
		},

		item: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-between',
			gap: 16,
		},

		name: {
			flex: 1,
			gap: 4,
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
		},

		indicator: {
			width: 12,
			height: 12,
			borderRadius: 12,
		},
	})
