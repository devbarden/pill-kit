import { FC, memo, useContext, useMemo } from 'react'

import { GlobalStateContext } from '@app/context'
import { ModalBottomListContent } from '@app/components'
import { getSelectNumberItemsByLocale } from '@app/utils'
import { MEDICINE_COUNT_PER_DAY_SELECT_ITEMS } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

export const ModalCountPerDayContent: FC = memo(() => {
	const { language } = useContext(GlobalStateContext)
	const { changeCountPerDayHandler, closeCountPerDayModal } =
		useContext(MedicineFormContext)

	const items = useMemo(
		() =>
			getSelectNumberItemsByLocale(
				MEDICINE_COUNT_PER_DAY_SELECT_ITEMS,
				language,
			),
		[language],
	)
	return (
		<ModalBottomListContent
			items={items}
			handler={changeCountPerDayHandler}
			close={closeCountPerDayModal}
		/>
	)
})
