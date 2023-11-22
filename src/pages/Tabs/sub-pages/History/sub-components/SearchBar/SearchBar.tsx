import { FC, memo, useCallback, useContext, useMemo, useRef } from 'react'
import { values, filter, size } from 'lodash'
import { useTranslation } from 'react-i18next'
import { Pressable, Box, Text } from 'native-base'

import { TypeModalHandlers } from '@app/types'
import { Form, Icon, Modal } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'
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
					leftElement={<Icon name={EnumIconName.search} {...commonIconProps} />}
					rightElement={
						<Box style={styles.actionsWrapper}>
							{searchValue && (
								<Pressable onPress={clearSearchValue}>
									<Icon name={EnumIconName.clear} {...commonIconProps} />
								</Pressable>
							)}
							<Pressable onPress={openFiltersModal}>
								<Box style={styles.badge}>
									<Text style={styles.badgeText}>{activeFilters}</Text>
								</Box>
								<Icon name={EnumIconName.options} {...commonIconProps} />
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
