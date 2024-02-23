import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			width: '100%',
			overflow: 'hidden',
			borderRadius: 12,
			backgroundColor: style.color.primary,
		},
	})
