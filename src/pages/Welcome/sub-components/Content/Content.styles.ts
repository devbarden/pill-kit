import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			gap: 32,
			margin: 16,
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		logo: {
			flex: 1,
			gap: 16,
			justifyContent: 'center',
			alignItems: 'center',
		},

		checkbox: {
			gap: 16,
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
		},

		agreement: {
			width: '100%',
			gap: 8,
		},

		fullFlex: {
			flex: 1,
		},

		link: {
			textDecorationLine: 'underline',
			color: style.color.main,
		},

		btn: {
			width: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 16,
			paddingVertical: 16,
			paddingHorizontal: 32,
		},
	})
