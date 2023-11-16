import { StyleSheet } from 'react-native'

import { CARD_MARGIN_TOP } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		borderRadius: 16,
		marginTop: CARD_MARGIN_TOP,
		flexDirection: 'row-reverse',
	},
})
