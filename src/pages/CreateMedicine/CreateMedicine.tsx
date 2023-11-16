import { FC, memo, useMemo } from 'react'

import { addWeeks } from '@app/utils'
import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { MEDICINE_TYPE } from '@app/constants'
import { MedicineWithoutId } from '@app/types'
import { BgWrapper, ContentWrapper } from '@app/components'

export const CreateMedicine: FC = memo(() => {
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const data: MedicineWithoutId = useMemo(
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
		<BgWrapper>
			<ContentWrapper>
				<MedicineForm
					data={data}
					submitHandler={save}
					isSubmitting={isUploading}
				/>
			</ContentWrapper>
		</BgWrapper>
	)
})
