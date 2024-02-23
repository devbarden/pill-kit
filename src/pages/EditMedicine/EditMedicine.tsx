import { FC, Fragment, ReactElement, memo, useMemo } from 'react'
import { useRoute } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { SafeArea } from '@app/components'
import { DEFAULT_EMPTY_MEDICINE, IS_ANDROID } from '@app/constants'
import { TypeEditMedicineRouteProp, TypeMedicineWithoutId } from '@app/types'

import { NotFound, RemoveAction } from './sub-components'

type TypeProps = {
	children: ReactElement
}

const Wrapper: FC<TypeProps> = memo(({ children }) => {
	if (IS_ANDROID) {
		return <SafeArea>{children}</SafeArea>
	}

	return <Fragment>{children}</Fragment>
})

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
			<Wrapper>
				<MedicineForm
					data={dataWhileLoading}
					submitHandler={edit}
					isSubmitting={isUpdating}
					additionalActions={<RemoveAction />}
				/>
			</Wrapper>
		)
	}

	if (!data) {
		return (
			<Wrapper>
				<NotFound />
			</Wrapper>
		)
	}

	return (
		<Wrapper>
			<MedicineForm
				data={data}
				submitHandler={edit}
				isSubmitting={isUpdating}
				additionalActions={<RemoveAction />}
			/>
		</Wrapper>
	)
})
