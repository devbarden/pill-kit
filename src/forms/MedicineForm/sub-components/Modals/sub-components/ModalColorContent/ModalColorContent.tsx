import { FC, memo, useContext, useMemo } from 'react'
import { values } from 'lodash'

import { EnumMedicineColor } from '@app/enums'
import { ModalColorListContent } from '@app/components'

import { MedicineFormContext } from '../../../../context'

export const ModalColorContent: FC = memo(() => {
	const { changeColorHandler, closeColorModal } =
		useContext(MedicineFormContext)

	const medicineColors = useMemo(() => values(EnumMedicineColor), [])

	return (
		<ModalColorListContent
			items={medicineColors}
			handler={changeColorHandler}
			close={closeColorModal}
		/>
	)
})
