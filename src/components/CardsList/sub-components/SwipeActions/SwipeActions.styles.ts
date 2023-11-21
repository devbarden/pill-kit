import { StyleSheet } from 'react-native'

import { CARD_MARGIN } from '@app/constants'

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: CARD_MARGIN,
		marginHorizontal: CARD_MARGIN,
		borderRadius: 16,
	},
})
