import { FC, memo, useState, useCallback } from 'react'
import { Center, Text, Button, Input } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { Medicine, ROUTES } from '@app/types'

export const CreateMedicine: FC = memo(() => {
	const { navigate } = useNavigation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const [form, setForm] = useState<Omit<Medicine, 'id'>>({ name: '' })

	const backHandler = useCallback(() => {
		navigate(ROUTES.HOME)
	}, [navigate])

	const inputNameHandler = useCallback((name: string) => {
		setForm((prev) => ({ ...prev, name }))
	}, [])

	const saveHandler = useCallback(async () => {
		await save(form)
		backHandler()
	}, [save, form, backHandler])

	return (
		<Center flex={1}>
			<Text>Create Medicine Page</Text>
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
		</Center>
	)
})
