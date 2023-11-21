import { FC, Fragment, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { entries } from 'lodash'

import { uid, isLast } from '@app/utils'
import { EnumCardFilter } from '@app/enums'
import { Form, Switch } from '@app/components'

import { HistoryContext } from '../../context'

export const FiltersModalContent: FC = memo(() => {
	const { t } = useTranslation()
	const { filters, setFilters } = useContext(HistoryContext)

	const toggleFilter = useCallback(
		(filter: EnumCardFilter) => {
			setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }))
		},
		[setFilters],
	)

	return (
		<Form.Wrapper>
			{entries(filters).map(([filter, status], index, self) => (
				<Fragment key={uid()}>
					<Form.Item name={t(`history:filters.${filter}`)}>
						<Switch
							isChecked={status}
							onToggle={() => toggleFilter(filter as EnumCardFilter)}
						/>
					</Form.Item>
					{isLast(index, self) && <Form.Separator />}
				</Fragment>
			))}
		</Form.Wrapper>
	)
})
