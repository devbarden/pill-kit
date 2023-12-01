import { FC, memo, useContext } from 'react'

import { ModalBottomListContent } from '@app/components'
import { MEDICINE_COUNT_PER_DAY_SELECT_ITEMS } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

export const ModalCountPerDayContent: FC = memo(() => {
	const { changeCountPerDayHandler, closeCountPerDayModal } =
		useContext(MedicineFormContext)

	return (
		<ModalBottomListContent
			items={MEDICINE_COUNT_PER_DAY_SELECT_ITEMS}
			handler={changeCountPerDayHandler}
			close={closeCountPerDayModal}
		/>
	)
})
