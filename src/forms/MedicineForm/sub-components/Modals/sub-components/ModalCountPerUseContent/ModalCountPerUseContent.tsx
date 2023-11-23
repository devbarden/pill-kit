import { FC, memo, useContext } from 'react'

import { ModalBottomListContent } from '@app/components'
import { MEDICINE_PILL_COUNT_PER_USE_SELECT_ITEMS } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

export const ModalCountPerUseContent: FC = memo(() => {
	const { changeCountPerUseHandler, closeCountPerUseModal } =
		useContext(MedicineFormContext)

	return (
		<ModalBottomListContent
			items={MEDICINE_PILL_COUNT_PER_USE_SELECT_ITEMS}
			handler={changeCountPerUseHandler}
			close={closeCountPerUseModal}
		/>
	)
})
