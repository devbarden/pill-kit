import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'native-base'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Loader, ScreenWrapper } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { EditMedicineRouteProp, ROUTES } from '@app/types'

import { MedicineForm } from '../common'

export const EditMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { params } = useRoute<EditMedicineRouteProp>()
	const { useMedicine, useEditMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(params.id)
	const { mutateAsync: edit, isLoading: isUpdating } = useEditMedicine(
		params.id,
	)

	const backHandler = useCallback(() => {
		navigate(ROUTES.HOME)
	}, [navigate])

	if (isLoading) {
		return (
			<ScreenWrapper>
				<Loader />
			</ScreenWrapper>
		)
	}

	if (!data) {
		return (
			<ScreenWrapper>
				<Text>{t('editMedicine:notFound')}</Text>
				<Button onPress={backHandler}>{t('editMedicine:back')}</Button>
			</ScreenWrapper>
		)
	}

	return (
		<ScreenWrapper>
			<Text>{t('editMedicine:title')}</Text>
			<MedicineForm
				data={data}
				submitHandler={edit}
				isSubmitting={isUpdating}
			/>
		</ScreenWrapper>
	)
})
