import { StyleSheet } from 'react-native'

import { EnumColor } from '@app/enums'

export type TypeStyleProps = {
	isArabic: boolean
}

export const styles = ({ isArabic }: TypeStyleProps) =>
	StyleSheet.create({
		wrapper: {
			width: '100%',
			maxHeight: '50%',
			borderRadius: 16,
			backgroundColor: EnumColor.white,
		},

		title: {
			alignItems: 'center',
			borderBottomWidth: 1,
			borderColor: EnumColor.grey,
		},

		actions: {
			flexDirection: 'row',
			borderTopWidth: 1,
			borderColor: EnumColor.grey,
		},

		separator: {
			borderRightWidth: 1,
			borderColor: EnumColor.grey,
		},

		fullScreen: {
			flex: 1,
			marginTop: 80,
			marginBottom: 66,
			maxHeight: '100%',
		},

		fullFlex: {
			flex: 1,
		},

		paddingVertical: {
			paddingVertical: 16,
		},

		paddingHorizontal: {
			paddingHorizontal: 16,
		},

		pressedBg: {
			backgroundColor: EnumColor.grey,
		},

		defaultBg: {
			backgroundColor: EnumColor.white,
		},

		bottomLeftRadius: {
			borderBottomLeftRadius: 16,
		},

		bottomRightRadius: {
			borderBottomRightRadius: 16,
		},

		alignItemsByLocale: {
			alignItems: isArabic ? 'flex-end' : 'flex-start',
		},
	})
