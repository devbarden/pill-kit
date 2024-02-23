import * as Haptics from 'expo-haptics'
import { FC, memo, useCallback, useContext, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { values, filter, size } from 'lodash'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'
import { getNumberByLocale } from '@app/utils'
import { TypeModalHandlers } from '@app/types'
import { Form, Icon, Modal } from '@app/components'
import { MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { HistoryContext } from '../../context'
import { FiltersModalContent } from './sub-components'

import { styles } from './SearchBar.styles'

export const SearchBar: FC = memo(() => {
	const { t } = useTranslation()
	const { locale, globalStyleProps } = useGlobalContext()
	const { searchValue, setSearchValue, filters } = useContext(HistoryContext)

	const filtersModalRef = useRef<TypeModalHandlers>(null)

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const commonIconProps = useMemo(
		() => ({
			size: 20,
			color: globalStyleProps.style.color.highlight,
		}),
		[globalStyleProps],
	)

	const activeFilters = useMemo(
		() =>
			getNumberByLocale(
				size(filter(values(filters), (isFilterActive) => isFilterActive)),
				locale,
			),
		[filters, locale],
	)

	const getPressableStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			style.action,
			pressed ? style.pressed : {},
		],
		[style],
	)

	const onChangeSearchValueHandler = useCallback(
		(value: string) => {
			setSearchValue(value)
		},
		[setSearchValue],
	)

	const clearSearchValue = useCallback(() => {
		setSearchValue('')
	}, [setSearchValue])

	const openFiltersModal = useCallback(() => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		filtersModalRef.current?.open()
	}, [])

	return (
		<Form.Wrapper>
			<Form.Input
				maxLength={MEDICINE_MAX_LENGTH_OF_NAME}
				value={searchValue}
				onChangeText={onChangeSearchValueHandler}
				returnKeyType="search"
				placeholder={t('component:input.placeholder.search')}
				leftElement={<Icon name={EnumIconName.search} {...commonIconProps} />}
				rightElement={
					<Box style={style.actionsWrapper}>
						{searchValue && (
							<Pressable onPress={clearSearchValue} style={getPressableStyles}>
								<Icon name={EnumIconName.clear} {...commonIconProps} />
							</Pressable>
						)}
						<Pressable onPress={openFiltersModal} style={getPressableStyles}>
							<Box style={style.badge}>
								<Text style={style.badgeText}>{activeFilters}</Text>
							</Box>
							<Icon name={EnumIconName.options} {...commonIconProps} />
						</Pressable>
					</Box>
				}
			/>

			<Modal
				withGreyBackgroundColor
				title={t('history:filters.title')}
				content={<FiltersModalContent />}
				ref={filtersModalRef}
			/>
		</Form.Wrapper>
	)
})
