import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { EnumModalType } from '@app/enums'

import { SettingsFormContext } from '../../context'
import { ModalLanguageContent, ModalRemoveDataContent } from './sub-components'

export const Modals: FC = memo(() => {
	const { t } = useTranslation()
	const { useRemoveAllMedicines } = useEndpoints()
	const { mutateAsync: removeAllMedicines } = useRemoveAllMedicines()
	const { removeAlertRef, modalLanguageRef } = useContext(SettingsFormContext)

	return (
		<Fragment>
			<Modal
				type={EnumModalType.bottom}
				title={t('settings:field.language')}
				content={<ModalLanguageContent />}
				ref={modalLanguageRef}
			/>

			<Modal
				title={t('settings:modal.clearAllData.title')}
				content={<ModalRemoveDataContent />}
				closeText={t('component:button.cancel')}
				submit={{
					text: t('component:button.delete'),
					handler: removeAllMedicines,
				}}
				ref={removeAlertRef}
			/>
		</Fragment>
	)
})
