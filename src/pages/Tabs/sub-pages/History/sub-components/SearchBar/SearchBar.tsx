import { FC, memo, useCallback, useContext, useMemo, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'
import { values, filter, size } from 'lodash'
import { Pressable, Box, Text } from 'native-base'

import { EnumColor } from '@app/enums'
import { Form, Modal } from '@app/components'
import { TypeModalHandlers } from '@app/types'
import { MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { FiltersModalContent } from '../FiltersModalContent'
import { HistoryContext } from '../../context'
import { styles } from './SearchBar.styles'

export const SearchBar: FC = memo(() => {
	const { t } = useTranslation()
	const { searchValue, setSearchValue, filters } = useContext(HistoryContext)

	const filtersModalRef = useRef<TypeModalHandlers>(null)

	const commonIconProps = useMemo(
		() => ({
			size: 24,
			color: EnumColor.darkGrey,
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
		filtersModalRef.current?.open()
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
			<Modal
				title={t('history:filtersTitle')}
				content={<FiltersModalContent />}
				ref={filtersModalRef}
			/>
		</Form.Wrapper>
	)
})
