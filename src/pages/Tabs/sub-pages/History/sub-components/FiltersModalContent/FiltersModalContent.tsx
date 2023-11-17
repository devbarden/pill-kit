import { FC, Fragment, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { entries } from 'lodash'

import { uid, isLast } from '@app/utils'
import { Form, Switch } from '@app/components'
import { CARD_FILTER } from '@app/constants'

import { HistoryContext } from '../../context'

export const FiltersModalContent: FC = memo(() => {
	const { t } = useTranslation()
	const { filters, setFilters } = useContext(HistoryContext)

	const toggleFilter = useCallback(
		(filter: CARD_FILTER) => {
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
							onToggle={() => toggleFilter(filter as CARD_FILTER)}
						/>
					</Form.Item>
					{isLast(index, self) && <Form.Separator />}
				</Fragment>
			))}
		</Form.Wrapper>
	)
})
