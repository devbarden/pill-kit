import { FC, memo, useContext, useMemo } from 'react'

import { useGlobalContext } from '@app/hooks'
import { ModalBottomListContent } from '@app/components'
import { getSelectNumberItemsByLocale } from '@app/utils'
import { MEDICINE_COUNT_PER_DAY_SELECT_ITEMS } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

export const ModalCountPerDayContent: FC = memo(() => {
	const { locale } = useGlobalContext()
	const { changeCountPerDayHandler, closeCountPerDayModal } =
		useContext(MedicineFormContext)

	const items = useMemo(
		() =>
			getSelectNumberItemsByLocale(MEDICINE_COUNT_PER_DAY_SELECT_ITEMS, locale),
		[locale],
	)
	return (
		<ModalBottomListContent
			items={items}
			handler={changeCountPerDayHandler}
			close={closeCountPerDayModal}
		/>
	)
})
