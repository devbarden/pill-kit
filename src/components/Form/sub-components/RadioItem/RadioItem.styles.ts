import { StyleSheet } from 'react-native'

export type TypeStyleProps = {
	isLanguageRTL: boolean
}

export const styles = ({ isLanguageRTL }: TypeStyleProps) =>
	StyleSheet.create({
		wrapper: {
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: 16,
			gap: 16,
		},

		fullFlex: {
			flex: 1,
		},

		titleWrapper: {
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
			alignItems: 'center',
			gap: 12,
		},

		title: {
			flex: 1,
			flexDirection: isLanguageRTL ? 'row-reverse' : 'row',
		},

		children: {
			flexDirection: 'row-reverse',
			alignItems: 'center',
		},

		text: {
			fontSize: 16,
		},
	})
