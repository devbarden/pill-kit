import { StyleSheet } from 'react-native'

import { TypeGlobalStyleProps } from '@app/types'

const commonSpace = 8
const badgeSize = 10

export const styles = ({ style }: TypeGlobalStyleProps) =>
	StyleSheet.create({
		actionsWrapper: {
			flexDirection: 'row',
		},

		action: {
			padding: commonSpace,
		},

		badge: {
			zIndex: 1,
			position: 'absolute',
			right: 0,
			top: 0,
			height: badgeSize * 2,
			width: badgeSize * 2,
			borderRadius: badgeSize * 2,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: style.color.main,
		},

		badgeText: {
			color: style.color.primary,
			fontSize: badgeSize,
			textAlign: 'center',
		},

		pressed: {
			borderRadius: badgeSize * 2,
			backgroundColor: style.color.tertiary,
		},
	})
