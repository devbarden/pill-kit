import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Header } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'

export const CreateMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	return (
		<Fragment>
			<Header title={t('createMedicine:title')} withGoBack />
			<MedicineForm
				data={DEFAULT_EMPTY_MEDICINE}
				submitHandler={save}
				isSubmitting={isUploading}
			/>
		</Fragment>
	)
})
