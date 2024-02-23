import { FC, Fragment, ReactElement, memo, useMemo } from 'react'

import { MedicineForm } from '@app/forms'
import { SafeArea } from '@app/components'
import { useEndpoints, useGlobalContext } from '@app/hooks'
import { DEFAULT_EMPTY_MEDICINE, IS_ANDROID } from '@app/constants'

type TypeProps = {
	children: ReactElement
}

const Wrapper: FC<TypeProps> = memo(({ children }) => {
	if (IS_ANDROID) {
		return <SafeArea>{children}</SafeArea>
	}

	return <Fragment>{children}</Fragment>
})

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
		<Wrapper>
			<MedicineForm
				data={defaultEmptyMedicine}
				submitHandler={save}
				isSubmitting={isUploading}
			/>
		</Wrapper>
	)
})
