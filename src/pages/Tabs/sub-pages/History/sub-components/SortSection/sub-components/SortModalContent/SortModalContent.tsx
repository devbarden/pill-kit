import { FC, Fragment, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { values } from 'lodash'
import { Radio } from 'native-base'

import { Form } from '@app/components'
import { uid, isLast } from '@app/utils'
import { CARD_SORT_TYPE } from '@app/constants'
import { TypeMedicineSortableField } from '@app/typess'

import { HistoryContext } from '../../../../context'

export const SortModalContent: FC = memo(() => {
	const { t } = useTranslation()
	const { sortType, setSortType, closeSortModal } = useContext(HistoryContext)

	const onChangeSortType = useCallback(
		(value: string) => {
			setSortType(value as TypeMedicineSortableField)
			closeSortModal()
		},
		[setSortType, closeSortModal],
	)

	return (
		<Radio.Group name="sort-types" value={sortType}>
			<Form.Wrapper>
				{values(CARD_SORT_TYPE).map((item, index, self) => (
					<Fragment key={uid()}>
						<Form.RadioItem
							text={t(`history:sortTypes.${item}`)}
							value={item}
							handler={() => onChangeSortType(item)}
						/>
						{isLast(index, self) && <Form.Separator />}
					</Fragment>
				))}
			</Form.Wrapper>
		</Radio.Group>
	)
})
