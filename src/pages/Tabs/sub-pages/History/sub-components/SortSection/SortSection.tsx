import { FC, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { COLORS } from '@app/constants'

import { HistoryContext } from '../../context'
import { styles } from './SortSection.styles'

export const SortSection: FC = memo(() => {
	const { t } = useTranslation()
	const { medicines } = useContext(HistoryContext)

	const openSortingOptions = useCallback(() => {
		// TODO: implement sort options
	}, [])

	return (
		<Box style={styles.wrapper}>
			<Text
				fontSize="lg"
				numberOfLines={1}
				color={COLORS.DARK_GREY}
				style={styles.maxWidthHalfOfRow}>
				{t('sortSection:medicines')}: {medicines.length}
			</Text>
			<Pressable
				style={[styles.sort, styles.maxWidthHalfOfRow]}
				onPress={openSortingOptions}>
				<Text fontSize="lg" numberOfLines={1} color={COLORS.DARK_GREY}>
					{t('sortSection:sort')}
				</Text>
				<MaterialCommunityIcons
					name="sort"
					size={24}
					color={COLORS.DARK_GREY}
				/>
			</Pressable>
		</Box>
	)
})
