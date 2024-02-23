import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-around',
			backgroundColor: style.color.primary,
			borderColor: style.color.tertiary,
			borderTopWidth: 1,
		},
	})
