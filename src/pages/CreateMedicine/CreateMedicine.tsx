import { FC, Fragment, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { addWeeks } from '@app/utils'
import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { T_MedicineWithoutId } from '@app/types'
import { MEDICINE_TYPE } from '@app/constants'
import { Header } from '@app/components'

export const CreateMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const data: T_MedicineWithoutId = useMemo(
		() => ({
			name: '',
			type: MEDICINE_TYPE.PILL,
			countPerUse: '',
			countPerDay: '',
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
				data={data}
				submitHandler={save}
				isSubmitting={isUploading}
			/>
		</Fragment>
	)
})
