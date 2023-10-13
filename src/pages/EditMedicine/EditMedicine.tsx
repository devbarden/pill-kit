import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Center, Text } from 'native-base'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Loader } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { EditMedicineRouteProp, ROUTES } from '@app/types'

import { Form } from './Form'

export const EditMedicine: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { params } = useRoute<EditMedicineRouteProp>()
	const { useMedicine } = useEndpoints()
	const { data, isLoading } = useMedicine(params.id)

	const backHandler = useCallback(() => {
		navigate(ROUTES.HOME)
	}, [navigate])

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		return (
			<Center flex={1}>
				<Text>{t('editMedicine:notFound')}</Text>
				<Button onPress={backHandler}>{t('editMedicine:back')}</Button>
			</Center>
		)
	}

	return (
		<Center flex={1}>
			<Text>{t('editMedicine:title')}</Text>
			<Form data={data} />
		</Center>
	)
})
