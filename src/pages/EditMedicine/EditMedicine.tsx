import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useRoute } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { Header, Loader } from '@app/components'
import { TypeEditMedicineRouteProp } from '@app/types'

import { NotFound, RemoveAction } from './sub-components'

export const EditMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { params } = useRoute<TypeEditMedicineRouteProp>()
	const { id } = params
	const { useMedicine, useEditMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(id)
	const { mutateAsync: edit, isLoading: isUpdating } = useEditMedicine(id)

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		return <NotFound />
	}

	return (
		<Fragment>
			<Header title={t('editMedicine:title')} withGoBack />
			<MedicineForm
				data={data}
				submitHandler={edit}
				isSubmitting={isUpdating}
				additionalActions={<RemoveAction />}
			/>
		</Fragment>
	)
})
