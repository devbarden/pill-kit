import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flex: 1,
			gap: 16,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: style.color.primary,
		},
	})
