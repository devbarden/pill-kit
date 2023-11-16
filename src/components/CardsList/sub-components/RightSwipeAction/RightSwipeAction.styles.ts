import { StyleSheet } from 'react-native'

import { CARD_MARGIN } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		borderRadius: 16,
		marginTop: CARD_MARGIN,
		marginHorizontal: CARD_MARGIN,
		flexDirection: 'row-reverse',
	},
})
