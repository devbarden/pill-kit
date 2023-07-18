import { FC, memo, useState, useCallback } from 'react'
import { Button, Input } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { Medicine, MedicineWithoutId, ROUTES } from '@app/types'

interface Props {
	data: Medicine
}

export const Form: FC<Props> = memo(({ data }) => {
	const { id, ...rest } = data
	const { navigate } = useNavigation()
	const { useEditMedicine } = useEndpoints()
	const { mutateAsync: edit, isLoading: isUploading } = useEditMedicine(id)

	const [form, setForm] = useState<MedicineWithoutId>(rest)

	const backHandler = useCallback(() => {
		navigate(ROUTES.HOME)
	}, [navigate])

	const inputNameHandler = useCallback((name: string) => {
		setForm((prev) => ({ ...prev, name }))
	}, [])

	const saveHandler = useCallback(async () => {
		await edit(form)
		backHandler()
	}, [edit, form, backHandler])

	return (
		<>
			<Input
				mx="3"
				w="100%"
				placeholder="Medicine"
				value={form.name}
				onChangeText={inputNameHandler}
			/>
			<Button disabled={isUploading} onPress={saveHandler}>
				Save
			</Button>
			<Button disabled={isUploading} onPress={backHandler}>
				Back
			</Button>
		</>
	)
})
