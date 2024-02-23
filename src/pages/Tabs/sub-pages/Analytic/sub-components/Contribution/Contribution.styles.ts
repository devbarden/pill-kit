import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			overflow: 'hidden',
			padding: 16,
			borderRadius: 12,
			marginHorizontal: 16,
			backgroundColor: style.color.primary,
		},

		content: {
			flex: 1,
			flexDirection: 'row',
			overflow: 'hidden',
			justifyContent: 'space-between',
		},

		info: {
			flex: 1,
			justifyContent: 'center',
		},
	})
