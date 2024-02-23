import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			gap: 16,
		},

		item: {
			padding: 16,
			borderRadius: 16,
			backgroundColor: style.color.secondary,
		},

		pressedBg: {
			backgroundColor: style.color.tertiary,
		},

		defaultBg: {
			backgroundColor: style.color.secondary,
		},
	})
