import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = (globalStyleProps: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			paddingVertical: 8,
			paddingHorizontal: 12,
		},

		input: {
			fontSize: 16,
		},
	})
