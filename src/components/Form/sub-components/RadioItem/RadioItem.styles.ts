import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 16,
			gap: 16,
		},

		fullFlex: {
			flex: 1,
		},

		titleWrapper: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
			gap: 12,
		},

		title: {
			flex: 1,
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
		},

		children: {
			flexDirection: 'row-reverse',
			alignItems: 'center',
		},

		text: {
			fontSize: 16,
			color: style.color.invert,
		},
	})
