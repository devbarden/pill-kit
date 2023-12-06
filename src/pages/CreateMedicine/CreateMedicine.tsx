import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'

export const CreateMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	return (
		<MedicineForm
			data={DEFAULT_EMPTY_MEDICINE}
			title={t('createMedicine:title')}
			submitHandler={save}
			isSubmitting={isUploading}
		/>
	)
})
