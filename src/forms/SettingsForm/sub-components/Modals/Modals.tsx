import { FC, Fragment, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { EnumModalType } from '@app/enums'

import { SettingsFormContext } from '../../context'
import {
	ModalLanguageContent,
	ModalRemoveDataContent,
	ModalTermsOfUseContent,
} from './sub-components'

export const Modals: FC = memo(() => {
	const { t } = useTranslation()

	const { termsOfUseRef, removeAlertRef, modalLanguageRef } =
		useContext(SettingsFormContext)

	const { useRemoveAllMedicines } = useEndpoints()
	const { mutateAsync: removeAllMedicines, isLoading: isRemoving } =
		useRemoveAllMedicines()

	return (
		<Fragment>
			<Modal
				type={EnumModalType.bottom}
				title={t('settingsForm:language')}
				content={<ModalLanguageContent />}
				ref={modalLanguageRef}
			/>

			<Modal
				title={t('removeDataAlert:title')}
				content={<ModalRemoveDataContent />}
				closeText={t('components:btn.cancel')}
				submit={{
					text: t('components:btn.delete'),
					handler: removeAllMedicines,
					isLoading: isRemoving,
					isLoadingText: t('actions:removing'),
				}}
				ref={removeAlertRef}
			/>

			<Modal
				onFullScreen
				withContentScroll
				title={t('termsOfUse:title')}
				content={<ModalTermsOfUseContent />}
				ref={termsOfUseRef}
			/>
		</Fragment>
	)
})
