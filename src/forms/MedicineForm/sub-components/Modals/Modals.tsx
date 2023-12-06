import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from '@app/components'
import { EnumModalType } from '@app/enums'

import { MedicineFormContext } from '../../context'
import {
	ModalNameContent,
	ModalTypeContent,
	ModalTimeContent,
	ModalColorContent,
	ModalValidationContent,
	ModalCountPerUseContent,
	ModalCountPerDayContent,
} from './sub-components'

export const Modals: FC = memo(() => {
	const { t } = useTranslation()
	const {
		modalNameRef,
		modalTypeRef,
		modalColorRef,
		modalCountPerUseRef,
		modalCountPerDayRef,
		modalTimeRef,
		modalValidationRef,
	} = useContext(MedicineFormContext)

	return (
		<Fragment>
			<Modal
				type={EnumModalType.top}
				title={t('medicineForm:name')}
				content={<ModalNameContent />}
				ref={modalNameRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicineForm:type')}
				content={<ModalTypeContent />}
				ref={modalTypeRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicineForm:count')}
				content={<ModalCountPerUseContent />}
				ref={modalCountPerUseRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicineForm:perDay')}
				content={<ModalCountPerDayContent />}
				ref={modalCountPerDayRef}
			/>

			<Modal
				withGreyBackgroundColor
				type={EnumModalType.bottom}
				title={t('medicineForm:time')}
				content={<ModalTimeContent />}
				ref={modalTimeRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicineForm:color')}
				content={<ModalColorContent />}
				ref={modalColorRef}
			/>

			<Modal
				title={t('medicineForm:validation.title')}
				content={<ModalValidationContent />}
				ref={modalValidationRef}
				closeText={t('components:btn.ok')}
			/>
		</Fragment>
	)
})
