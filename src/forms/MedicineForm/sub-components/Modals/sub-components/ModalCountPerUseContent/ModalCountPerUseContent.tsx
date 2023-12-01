import { FC, memo, useContext } from 'react'

import { ModalBottomListContent } from '@app/components'

import { MedicineFormContext } from '../../../../context'

export const ModalCountPerUseContent: FC = memo(() => {
	const {
		form,
		getCountPerUseSelectItems,
		changeCountPerUseHandler,
		closeCountPerUseModal,
	} = useContext(MedicineFormContext)

	return (
		<ModalBottomListContent
			items={getCountPerUseSelectItems(form.type)}
			handler={changeCountPerUseHandler}
			close={closeCountPerUseModal}
		/>
	)
})
