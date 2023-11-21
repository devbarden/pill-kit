import { FC, memo, useRef, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { COLORS } from '@app/constants'
import { Modal, ModalHandlers } from '@app/components'

import { SortModalContent } from '../SortModalContent'
import { HistoryContext } from '../../context'
import { styles } from './SortSection.styles'

export const SortSection: FC = memo(() => {
	const sortModalRef = useRef<ModalHandlers>(null)

	const { t } = useTranslation()
	const { medicines } = useContext(HistoryContext)

	const closeSortModalContent = useCallback(() => {
		sortModalRef.current?.close()
	}, [])

	const openSortingOptions = useCallback(() => {
		sortModalRef.current?.open()
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

			<Modal
				title={t('sortSection:modal.title')}
				closeText={t('components:btn.cancel')}
				content={<SortModalContent closeHandler={closeSortModalContent} />}
				ref={sortModalRef}
			/>
		</Box>
	)
})
