import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		separator: {
			borderBottomWidth: 2,
			borderBottomColor: style.color.secondary,
		},
	})
