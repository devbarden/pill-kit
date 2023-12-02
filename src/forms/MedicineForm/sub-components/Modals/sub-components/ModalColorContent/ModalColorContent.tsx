import { FC, memo, useContext } from 'react'

import { useSelectColors } from '@app/hooks'
import { EnumMedicineColor } from '@app/enums'
import { ModalColorListContent } from '@app/components'

import { MedicineFormContext } from '../../../../context'

export const ModalColorContent: FC = memo(() => {
	const { changeColorHandler, closeColorModal } =
		useContext(MedicineFormContext)
	const { items: medicineColorSelectItems } = useSelectColors(EnumMedicineColor)

	return (
		<ModalColorListContent
			items={medicineColorSelectItems}
			handler={changeColorHandler}
			close={closeColorModal}
		/>
	)
})
