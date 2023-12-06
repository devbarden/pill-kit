import { FC, memo, useCallback, useContext, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { values, filter, size } from 'lodash'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { TypeModalHandlers } from '@app/types'
import { Form, Icon, Modal } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'
import { MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { HistoryContext } from '../../context'
import { FiltersModalContent } from './sub-components'

import { styles } from './SearchBar.styles'

export const SearchBar: FC = memo(() => {
	const { t } = useTranslation()
	const { searchValue, setSearchValue, filters } = useContext(HistoryContext)

	const filtersModalRef = useRef<TypeModalHandlers>(null)

	const commonIconProps = useMemo(
		() => ({
			size: 20,
			color: EnumColor.darkGrey,
		}),
		[],
	)

	const activeFilters: number = useMemo(
		() => size(filter(values(filters), (isFilterActive) => isFilterActive)),
		[filters],
	)

	const getPressableStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.action,
			pressed ? styles.pressed : {},
		],
		[],
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
		filtersModalRef.current?.open()
	}, [])

	return (
		<Form.Wrapper>
			<Form.Input
				maxLength={MEDICINE_MAX_LENGTH_OF_NAME}
				value={searchValue}
				onChangeText={onChangeSearchValueHandler}
				returnKeyType="search"
				placeholder={t('components:input.placeholder.search')}
				leftElement={<Icon name={EnumIconName.search} {...commonIconProps} />}
				rightElement={
					<Box style={styles.actionsWrapper}>
						{searchValue && (
							<Pressable onPress={clearSearchValue} style={getPressableStyles}>
								<Icon name={EnumIconName.clear} {...commonIconProps} />
							</Pressable>
						)}
						<Pressable onPress={openFiltersModal} style={getPressableStyles}>
							<Box style={styles.badge}>
								<Text style={styles.badgeText}>{activeFilters}</Text>
							</Box>
							<Icon name={EnumIconName.options} {...commonIconProps} />
						</Pressable>
					</Box>
				}
			/>

			<Modal
				withGreyBackgroundColor
				title={t('history:filtersTitle')}
				content={<FiltersModalContent />}
				ref={filtersModalRef}
			/>
		</Form.Wrapper>
	)
})
