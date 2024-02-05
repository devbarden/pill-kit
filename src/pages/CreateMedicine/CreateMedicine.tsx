import { FC, memo } from 'react'

import { useEndpoints } from '@app/hooks'
import { MedicineForm } from '@app/forms'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'

export const CreateMedicine: FC = memo(() => {
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	return (
		<MedicineForm
			data={DEFAULT_EMPTY_MEDICINE}
			submitHandler={save}
			isSubmitting={isUploading}
		/>
	)
})
