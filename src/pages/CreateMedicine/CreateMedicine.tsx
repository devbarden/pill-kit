import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { addWeeks } from '@app/utils'
import { useEndpoints } from '@app/hooks'
import { MedicineType } from '@app/constants'
import { MedicineWithoutId } from '@app/types'
import { ScreenWrapper } from '@app/components'

import { MedicineForm } from '../common'

export const CreateMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const data: MedicineWithoutId = useMemo(
		() => ({
			name: '',
			type: MedicineType.PILL,
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
		<ScreenWrapper>
			<Text>{t('createMedicine:title')}</Text>
			<MedicineForm
				data={data}
				submitHandler={save}
				isSubmitting={isUploading}
			/>
		</ScreenWrapper>
	)
})
