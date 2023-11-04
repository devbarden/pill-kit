import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { addWeeks } from '@app/utils'
import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { MEDICINE_TYPE } from '@app/constants'
import { MedicineWithoutId } from '@app/types'

export const CreateMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const data: MedicineWithoutId = useMemo(
		() => ({
			name: '',
			type: MEDICINE_TYPE.PILL,
			countPerUse: '',
			countPerDay: '',
			completed: false,
			notification: true,
			startDate: Date.now(),
			endDate: addWeeks(new Date(), 2),
		}),
		[],
	)

	return (
		<MedicineForm
			title={t('createMedicine:title')}
			data={data}
			submitHandler={save}
			isSubmitting={isUploading}
		/>
	)
})
