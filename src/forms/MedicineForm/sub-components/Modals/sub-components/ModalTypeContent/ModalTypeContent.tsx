import { FC, memo, useContext } from 'react'

import { useSelectItems } from '@app/hooks'
import { EnumMedicineType } from '@app/enums'
import { ModalBottomListContent } from '@app/components'
import { MEDICINE_TYPE_TRANSLATION_PATH } from '@app/constants'

import { MedicineFormContext } from '../../../../context'

export const ModalTypeContent: FC = memo(() => {
	const { changeTypeHandler, closeTypeModal } = useContext(MedicineFormContext)
	const { items: medicineTypesSelectItems } = useSelectItems(
		EnumMedicineType,
		MEDICINE_TYPE_TRANSLATION_PATH,
	)

	return (
		<ModalBottomListContent
			items={medicineTypesSelectItems}
			handler={changeTypeHandler}
			close={closeTypeModal}
		/>
	)
})
