import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		action: {
			padding: 8,
		},

		pressed: {
			borderRadius: 24,
			backgroundColor: EnumColor.lightGrey,
		},

		inputWrapper: {
			paddingVertical: 8,
			paddingHorizontal: 12,
		},

		input: {
			fontSize: 16,
		},
	})
