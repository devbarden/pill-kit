import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		action: {
			padding: 8,
		},

		pressed: {
			borderRadius: 24,
			backgroundColor: style.color.tertiary,
		},

		inputWrapper: {
			paddingVertical: 8,
			paddingHorizontal: 12,
		},

		input: {
			fontSize: 16,
		},
	})
