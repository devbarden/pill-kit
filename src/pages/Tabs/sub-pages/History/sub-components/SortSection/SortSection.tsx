import * as Haptics from 'expo-haptics'
import { FC, memo, useContext, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { Icon, Modal } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'
import { getNumberByLocale, isRTL } from '@app/utils'

import { HistoryContext } from '../../context'
import { SortModalContent } from './sub-components'

import { styles, TypeStyleProps } from './SortSection.styles'

export const SortSection: FC = memo(() => {
	const { t, i18n } = useTranslation()
	const { medicines, sortModalRef, openSortModal } = useContext(HistoryContext)

	const isLanguageRTL = useMemo(() => isRTL(i18n.language), [i18n.language])

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isLanguageRTL,
		}),
		[isLanguageRTL],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

	const medicinesCount = useMemo(
		() => getNumberByLocale(medicines.length, i18n.language),
		[medicines.length, i18n.language],
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
				color={EnumColor.darkGrey}
				style={style.maxWidthHalfOfRow}>
				{t('history:sort.medicines')} : {medicinesCount}
			</Text>

			<Pressable style={getPressableStyles} onPress={pressHandler}>
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
