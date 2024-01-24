import { FC, memo, useContext, useMemo } from 'react'

import { GlobalStateContext } from '@app/context'
import { ModalBottomListContent } from '@app/components'
import { getSelectNumberItemsByLocale } from '@app/utils'

import { MedicineFormContext } from '../../../../context'

export const ModalCountPerUseContent: FC = memo(() => {
	const { language } = useContext(GlobalStateContext)
	const {
		form,
		getCountPerUseSelectItems,
		changeCountPerUseHandler,
		closeCountPerUseModal,
	} = useContext(MedicineFormContext)

	const items = useMemo(
		() =>
			getSelectNumberItemsByLocale(
				getCountPerUseSelectItems(form.type),
				language,
			),
		[language, form.type, getCountPerUseSelectItems],
	)

	return (
		<ModalBottomListContent
			items={items}
			handler={changeCountPerUseHandler}
			close={closeCountPerUseModal}
		/>
	)
})
