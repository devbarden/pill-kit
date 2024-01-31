import { FC, memo, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ModalBottomListContent } from '@app/components'
import { getSelectNumberItemsByLocale } from '@app/utils'
import { MEDICINE_COUNT_PER_DAY_SELECT_ITEMS } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

export const ModalCountPerDayContent: FC = memo(() => {
	const { i18n } = useTranslation()
	const { changeCountPerDayHandler, closeCountPerDayModal } =
		useContext(MedicineFormContext)

	const items = useMemo(
		() =>
			getSelectNumberItemsByLocale(
				MEDICINE_COUNT_PER_DAY_SELECT_ITEMS,
				i18n.language,
			),
		[i18n.language],
	)
	return (
		<ModalBottomListContent
			items={items}
			handler={changeCountPerDayHandler}
			close={closeCountPerDayModal}
		/>
	)
})
