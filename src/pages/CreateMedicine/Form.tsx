import { FC, memo, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { useEndpoints } from '@app/hooks'
import { MedicineWithoutId, ROUTES } from '@app/types'

export const Form: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { useAddMedicine } = useEndpoints()
	const { mutateAsync: save, isLoading: isUploading } = useAddMedicine()

	const [form, setForm] = useState<MedicineWithoutId>({ name: '' })

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
		<>
			<Input
				mx="3"
				w="100%"
				placeholder={t('components:input.placeholder')}
				value={form.name}
				onChangeText={inputNameHandler}
			/>

			<Button disabled={isUploading} onPress={saveHandler}>
				{t('components:btn.save')}
			</Button>
			<Button disabled={isUploading} onPress={backHandler}>
				{t('components:btn.back')}
			</Button>
		</>
	)
})
