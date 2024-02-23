import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			gap: 16,
			paddingVertical: 8,
			paddingHorizontal: 16,
			borderBottomWidth: 1,
			borderColor: style.color.transparent,
			backgroundColor: style.color.secondary,
		},

		backAction: {
			flexDirection: 'row',
			alignItems: 'center',
			flex: 1,
			gap: 16,
			paddingVertical: 8,
		},

		saveAction: {
			paddingVertical: 8,
			paddingLeft: 16,
		},

		title: {
			flex: 1,
		},
	})
