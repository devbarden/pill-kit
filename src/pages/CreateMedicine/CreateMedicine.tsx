import { FC, Fragment, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { addWeeks } from '@app/utils'
import { Header } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { EnumMedicineType } from '@app/enums'
import { TypeMedicineWithoutId } from '@app/types'

export const CreateMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const defaultMedicineData: TypeMedicineWithoutId = useMemo(
		() => ({
			name: '',
			type: EnumMedicineType.pill,
			countPerUse: '1',
			countPerDay: '2',
			notification: true,
			startDate: Date.now(),
			endDate: addWeeks(new Date(), 2),
		}),
		[],
	)

	return (
		<Fragment>
			<Header title={t('createMedicine:title')} withGoBack />
			<MedicineForm
				data={defaultMedicineData}
				submitHandler={save}
				isSubmitting={isUploading}
			/>
		</Fragment>
	)
})
