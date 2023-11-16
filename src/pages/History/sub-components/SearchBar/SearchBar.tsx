import { FC, memo, useCallback, useContext, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Box, Text } from 'native-base'
import { values, filter, size } from 'lodash'
import { Ionicons } from '@expo/vector-icons'

import { Form } from '@app/components'
import { COLORS, MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { HistoryContext } from '../../context'
import { FiltersModal, FiltersModalHandlers } from '../FiltersModal'
import { styles } from './SearchBar.styles'

export const SearchBar: FC = memo(() => {
	const { t } = useTranslation()
	const { searchValue, setSearchValue, filters } = useContext(HistoryContext)

	const filtersModalRef = useRef<FiltersModalHandlers>(null)

	const commonIconProps = useMemo(
		() => ({
			size: 24,
			color: COLORS.DARK_GREY,
		}),
		[],
	)

	const activeFilters: number = useMemo(
		() => size(filter(values(filters), (isFilterActive) => isFilterActive)),
		[filters],
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
		filtersModalRef.current?.openModal()
	}, [])

	return (
		<Form.Wrapper>
			<Form.Item>
				<Form.Input
					maxLength={MEDICINE_MAX_LENGTH_OF_NAME}
					value={searchValue}
					onChangeText={onChangeSearchValueHandler}
					placeholder={t('components:input.placeholder.search')}
					leftElement={<Ionicons name="search" {...commonIconProps} />}
					rightElement={
						<Box style={styles.actionsWrapper}>
							{searchValue && (
								<Pressable onPress={clearSearchValue}>
									<Ionicons name="close-circle-outline" {...commonIconProps} />
								</Pressable>
							)}
							<Pressable onPress={openFiltersModal}>
								<Box style={styles.badge}>
									<Text style={styles.badgeText}>{activeFilters}</Text>
								</Box>
								<Ionicons name="options" {...commonIconProps} />
							</Pressable>
						</Box>
					}
				/>
			</Form.Item>
			<FiltersModal ref={filtersModalRef} />
		</Form.Wrapper>
	)
})
