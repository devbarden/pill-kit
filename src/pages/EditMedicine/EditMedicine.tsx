import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useRoute } from '@react-navigation/native'

import { MedicineForm } from '@app/forms'
import { useEndpoints } from '@app/hooks'
import { Loader } from '@app/components'
import { EditMedicineRouteProp } from '@app/types'

import { NotFound } from './sub-components'

export const EditMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { params } = useRoute<EditMedicineRouteProp>()
	const { useMedicine, useEditMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(params.id)
	const { mutateAsync: edit, isLoading: isUpdating } = useEditMedicine(
		params.id,
	)

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		return <NotFound />
	}

	return (
		<MedicineForm
			title={t('editMedicine:title')}
			data={data}
			submitHandler={edit}
			isSubmitting={isUpdating}
		/>
	)
})
