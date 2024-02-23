import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			gap: 16,
		},

		item: {
			padding: 16,
			borderRadius: 16,
			backgroundColor: style.color.primary,
		},

		content: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
			gap: 16,
		},

		info: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
			gap: 8,
			paddingRight: 8,
			flex: 1,
		},
	})
