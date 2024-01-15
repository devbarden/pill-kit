import { FC, memo, useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { Icon, Modal } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { HistoryContext } from '../../context'
import { SortModalContent } from './sub-components'

import { styles } from './SortSection.styles'

export const SortSection: FC = memo(() => {
	const { t } = useTranslation()
	const { medicines, sortModalRef, openSortModal } = useContext(HistoryContext)

	const getPressableStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.sort,
			styles.maxWidthHalfOfRow,
			pressed ? styles.pressed : {},
		],
		[],
	)

	return (
		<Box style={styles.wrapper}>
			<Text
				fontSize="lg"
				numberOfLines={1}
				color={EnumColor.darkGrey}
				style={styles.maxWidthHalfOfRow}>
				{t('history:sort.medicines')}: {medicines.length}
			</Text>

			<Pressable style={getPressableStyles} onPress={openSortModal}>
				<Text fontSize="lg" numberOfLines={1} color={EnumColor.darkGrey}>
					{t('history:sort.button')}
				</Text>
				<Icon name={EnumIconName.sort} size={24} color={EnumColor.darkGrey} />
			</Pressable>

			<Modal
				withGreyBackgroundColor
				title={t('history:sort.modal.title')}
				closeText={t('component:button.cancel')}
				content={<SortModalContent />}
				ref={sortModalRef}
			/>
		</Box>
	)
})
