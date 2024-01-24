import { StyleSheet } from 'react-native'

export type TypeStyleProps = {
	isArabic: boolean
}

export const styles = ({ isArabic }: TypeStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isArabic ? 'row-reverse' : 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 16,
			gap: 16,
		},

		fullFlex: {
			flex: 1,
		},

		titleWrapper: {
			flexDirection: isArabic ? 'row-reverse' : 'row',
			alignItems: 'center',
			gap: 12,
		},

		title: {
			flex: 1,
			flexDirection: isArabic ? 'row-reverse' : 'row',
		},

		children: {
			flexDirection: 'row-reverse',
			alignItems: 'center',
		},

		text: {
			fontSize: 16,
		},
	})
