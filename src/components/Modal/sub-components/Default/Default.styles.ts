import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			width: '100%',
			maxHeight: '50%',
			borderRadius: 16,
			backgroundColor: style.color.primary,
		},

		title: {
			alignItems: 'center',
			borderBottomWidth: 1,
			borderColor: style.color.secondary,
		},

		actions: {
			flexDirection: 'row',
			borderTopWidth: 1,
			borderColor: style.color.secondary,
		},

		separator: {
			borderRightWidth: 1,
			borderColor: style.color.secondary,
		},

		fullScreen: {
			flex: 1,
			marginTop: 80,
			marginBottom: 66,
			maxHeight: '100%',
		},

		fullFlex: {
			flex: 1,
		},

		paddingVertical: {
			paddingVertical: 16,
		},

		paddingHorizontal: {
			paddingHorizontal: 16,
		},

		pressedBg: {
			backgroundColor: style.color.secondary,
		},

		defaultBg: {
			backgroundColor: style.color.primary,
		},

		bottomLeftRadius: {
			borderBottomLeftRadius: 16,
		},

		bottomRightRadius: {
			borderBottomRightRadius: 16,
		},

		alignItemsByLocale: {
			alignItems: isLocaleRTL ? 'flex-end' : 'flex-start',
		},

		spinner: {
			flex: 1,
			paddingVertical: 28,
			justifyContent: 'center',
			alignItems: 'center',
		},
	})
