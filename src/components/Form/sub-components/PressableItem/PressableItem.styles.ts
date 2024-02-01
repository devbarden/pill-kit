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

		valueHalfWidth: {
			width: '50%',
		},

		valueQuarterWidth: {
			width: '25%',
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

		valueWrapper: {
			flexDirection: isLanguageRTL ? 'row' : 'row-reverse',
			alignItems: 'center',
			gap: 16,
		},

		value: {
			flex: 1,
			alignItems: isLanguageRTL ? 'flex-start' : 'flex-end',
		},

		text: {
			fontSize: 16,
		},
	})
