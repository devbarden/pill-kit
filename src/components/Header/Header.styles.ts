import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			width: '100%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingVertical: 8,
			paddingHorizontal: 16,
			borderBottomWidth: 1,
			borderColor: style.color.tertiary,
			backgroundColor: style.color.primary,
		},

		back: {
			paddingRight: 8,
			height: '100%',
		},

		action: {
			paddingLeft: 8,
			height: '100%',
		},

		title: {
			flex: 1,
		},
	})
