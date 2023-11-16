import { FC, memo } from 'react'
import { useRoute } from '@react-navigation/native'

import { MedicineForm } from '@app/forms'
import { useEndpoints } from '@app/hooks'
import { EditMedicineRouteProp } from '@app/types'
import { BgWrapper, ContentWrapper, Loader } from '@app/components'

import { NotFound } from './sub-components'

export const EditMedicine: FC = memo(() => {
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
		return (
			<BgWrapper>
				<ContentWrapper>
					<NotFound />
				</ContentWrapper>
			</BgWrapper>
		)
	}

	return (
		<BgWrapper>
			<ContentWrapper>
				<MedicineForm
					data={data}
					submitHandler={edit}
					isSubmitting={isUpdating}
				/>
			</ContentWrapper>
		</BgWrapper>
	)
})
