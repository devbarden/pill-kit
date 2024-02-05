import { FC, memo, useMemo } from 'react'
import { useRoute } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'
import { TypeEditMedicineRouteProp, TypeMedicineWithoutId } from '@app/types'

import { NotFound, RemoveAction } from './sub-components'

export const EditMedicine: FC = memo(() => {
	const { params } = useRoute<TypeEditMedicineRouteProp>()
	const { id } = params
	const { useMedicine, useEditMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(id)
	const { mutateAsync: edit, isLoading: isUpdating } = useEditMedicine(id)

	const dataWhileLoading: TypeMedicineWithoutId = useMemo(
		() => ({
			...DEFAULT_EMPTY_MEDICINE,
			countPerUse: undefined,
		}),
		[],
	)

	if (isLoading) {
		return (
			<MedicineForm
				data={dataWhileLoading}
				submitHandler={edit}
				isSubmitting={isUpdating}
				additionalActions={<RemoveAction />}
			/>
		)
	}

	if (!data) {
		return <NotFound />
	}

	return (
		<MedicineForm
			data={data}
			submitHandler={edit}
			isSubmitting={isUpdating}
			additionalActions={<RemoveAction />}
		/>
	)
})
