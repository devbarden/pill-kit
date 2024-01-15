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
				withGreyBackgroundColor
				type={EnumModalType.top}
				title={t('medicine:field.name')}
				content={<ModalNameContent />}
				ref={modalNameRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicine:field.type')}
				content={<ModalTypeContent />}
				ref={modalTypeRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicine:field.countPerUse')}
				content={<ModalCountPerUseContent />}
				ref={modalCountPerUseRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicine:field.countPerDay')}
				content={<ModalCountPerDayContent />}
				ref={modalCountPerDayRef}
			/>

			<Modal
				withGreyBackgroundColor
				type={EnumModalType.bottom}
				title={t('medicine:field.times')}
				content={<ModalTimeContent />}
				ref={modalTimeRef}
			/>

			<Modal
				type={EnumModalType.bottom}
				title={t('medicine:field.color')}
				content={<ModalColorContent />}
				ref={modalColorRef}
			/>

			<Modal
				title={t('medicine:modal.validation.title')}
				content={<ModalValidationContent />}
				ref={modalValidationRef}
				closeText={t('component:button.ok')}
			/>
		</Fragment>
	)
})
