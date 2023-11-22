import { FC, memo, useRef, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'

import { Icon, Modal } from '@app/components'
import { TypeModalHandlers } from '@app/types'
import { EnumColor, EnumIconName } from '@app/enums'

import { HistoryContext } from '../../context'
import { SortModalContent } from '../SortModalContent'

import { styles } from './SortSection.styles'

export const SortSection: FC = memo(() => {
	const sortModalRef = useRef<TypeModalHandlers>(null)

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
				color={EnumColor.darkGrey}
				style={styles.maxWidthHalfOfRow}>
				{t('sortSection:medicines')}: {medicines.length}
			</Text>
			<Pressable
				style={[styles.sort, styles.maxWidthHalfOfRow]}
				onPress={openSortingOptions}>
				<Text fontSize="lg" numberOfLines={1} color={EnumColor.darkGrey}>
					{t('sortSection:sort')}
				</Text>
				<Icon name={EnumIconName.sort} size={24} color={EnumColor.darkGrey} />
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
