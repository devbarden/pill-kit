import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			overflow: 'hidden',
			marginHorizontal: 16,
			borderRadius: 12,
			backgroundColor: style.color.primary,
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
			alignItems: isLocaleRTL ? 'flex-end' : 'flex-start',
			paddingBottom: 16,
			paddingHorizontal: 16,
		},

		item: {
			flex: 1,
			gap: 4,
			maxWidth: '70%',
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
		},

		indicator: {
			width: 12,
			height: 12,
			borderRadius: 12,
		},
	})
