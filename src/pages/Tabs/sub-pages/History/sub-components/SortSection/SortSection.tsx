import * as Haptics from 'expo-haptics'
import { FC, memo, useContext, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumIconName } from '@app/enums'
import { Icon, Modal } from '@app/components'
import { useGlobalContext } from '@app/hooks'
import { getNumberByLocale } from '@app/utils'

import { HistoryContext } from '../../context'
import { SortModalContent } from './sub-components'

import { styles } from './SortSection.styles'

export const SortSection: FC = memo(() => {
	const { t } = useTranslation()
	const { locale, globalStyleProps } = useGlobalContext()
	const { medicines, sortModalRef, openSortModal } = useContext(HistoryContext)

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const medicinesCount = useMemo(
		() => getNumberByLocale(medicines.length, locale),
		[medicines.length, locale],
	)

	const getPressableStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			style.sort,
			style.maxWidthHalfOfRow,
			pressed ? style.pressed : {},
		],
		[style],
	)

	const pressHandler = useCallback(() => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		openSortModal()
	}, [openSortModal])

	return (
		<Box style={style.wrapper}>
			<Text
				fontSize="lg"
				numberOfLines={1}
				color={globalStyleProps.style.color.highlight}
				style={style.maxWidthHalfOfRow}>
				{t('history:sort.medicines')} : {medicinesCount}
			</Text>

			<Pressable style={getPressableStyles} onPress={pressHandler}>
				<Text
					fontSize="lg"
					numberOfLines={1}
					color={globalStyleProps.style.color.highlight}>
					{t('history:sort.button')}
				</Text>
				<Icon
					name={EnumIconName.sort}
					size={24}
					color={globalStyleProps.style.color.highlight}
				/>
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
