import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'
import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-around',
			backgroundColor: EnumColor.white,
			borderColor: EnumColor.lightGrey,
			borderTopWidth: 1,
		},
	})
