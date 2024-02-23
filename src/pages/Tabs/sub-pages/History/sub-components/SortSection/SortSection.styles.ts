import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

export const styles = ({ style, isLocaleRTL }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		maxWidthHalfOfRow: {
			maxWidth: '50%',
		},

		sort: {
			flexDirection: isLocaleRTL ? 'row-reverse' : 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 8,
			paddingVertical: 6,
			paddingHorizontal: 12,
			borderRadius: 12,
			backgroundColor: style.color.primary,
		},

		pressed: {
			backgroundColor: style.color.tertiary,
		},
	})
