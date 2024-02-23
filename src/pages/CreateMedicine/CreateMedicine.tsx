import { FC, memo, useMemo } from 'react'

import { useEndpoints, useGlobalContext } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'

export const CreateMedicine: FC = memo(() => {
	const { globalStyleProps } = useGlobalContext()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const defaultEmptyMedicine = useMemo(
		() => ({
			...DEFAULT_EMPTY_MEDICINE,
			color: globalStyleProps.style.color.main,
		}),
		[globalStyleProps],
	)

	return (
		<MedicineForm
			data={defaultEmptyMedicine}
			submitHandler={save}
			isSubmitting={isUploading}
		/>
	)
})
