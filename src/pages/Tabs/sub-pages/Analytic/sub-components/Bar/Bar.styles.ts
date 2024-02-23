import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			overflow: 'hidden',
			marginHorizontal: 16,
			padding: 16,
			borderRadius: 12,
			backgroundColor: style.color.primary,
		},
	})
