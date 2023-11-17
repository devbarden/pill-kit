import { FC, Fragment, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Radio } from 'native-base'
import { values } from 'lodash'

import { Form } from '@app/components'
import { uid, isLast } from '@app/utils'
import { MedicineSortableField } from '@app/types'
import { CARD_SORT_TYPE } from '@app/constants'

import { HistoryContext } from '../../context'

interface Props {
	closeHandler: () => void
}

export const SortModalContent: FC<Props> = memo(({ closeHandler }) => {
	const { t } = useTranslation()
	const { sortType, setSortType } = useContext(HistoryContext)

	const onChangeSortType = useCallback(
		(value: string) => {
			setSortType(value as MedicineSortableField)
			closeHandler()
		},
		[setSortType, closeHandler],
	)

	return (
		<Radio.Group name="sort-types" value={sortType} onChange={onChangeSortType}>
			<Form.Wrapper>
				{values(CARD_SORT_TYPE).map((item, index, self) => (
					<Fragment key={uid()}>
						<Form.Item name={t(`history:sortTypes.${item}`)}>
							<Radio accessibilityLabel={item} value={item} />
						</Form.Item>
						{isLast(index, self) && <Form.Separator />}
					</Fragment>
				))}
			</Form.Wrapper>
		</Radio.Group>
	)
})
