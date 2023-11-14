import { FC, memo, useCallback, useContext, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

import { Form } from '@app/components'
import { COLORS, MEDICINE_MAX_LENGTH_OF_NAME } from '@app/constants'

import { HistoryContext } from '../../context'
import { FiltersModal, FiltersModalHandlers } from '../FiltersModal'

export const SearchBar: FC = memo(() => {
	const filtersModalRef = useRef<FiltersModalHandlers>(null)

	const { t } = useTranslation()
	const { searchValue, setSearchValue } = useContext(HistoryContext)

	const commonIconProps = useMemo(
		() => ({
			size: 24,
			color: COLORS.DARK_GREY,
		}),
		[],
	)

	const onChangeSearchValueHandler = useCallback(
		(value: string) => {
			setSearchValue(value)
		},
		[setSearchValue],
	)

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
						// TODO: add X action to clear search value
						<Pressable onPress={openFiltersModal}>
							<Ionicons name="options" {...commonIconProps} />
						</Pressable>
					}
				/>
			</Form.Item>
			<FiltersModal ref={filtersModalRef} />
		</Form.Wrapper>
	)
})
