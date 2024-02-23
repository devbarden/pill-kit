import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			height: '80%',
			borderTopLeftRadius: 24,
			borderTopRightRadius: 24,
		},

		dash: {
			width: 44,
			height: 6,
			borderRadius: 16,
			backgroundColor: style.color.invert,
		},

		content: {
			flex: 1,
			width: '100%',
			alignItems: 'center',
			gap: 16,
			padding: 16,
			paddingBottom: 0,
		},

		children: {
			flex: 1,
			width: '100%',
		},
	})
