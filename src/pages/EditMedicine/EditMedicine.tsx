import { FC, memo, useCallback } from 'react'
import { Button, Center, Text } from 'native-base'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Loader } from '@app/components'
import { useMedicineById } from '@app/hooks'
import { EditMedicineRouteProp, ROUTES } from '@app/types'
import { Form } from './Form'

export const EditMedicine: FC = memo(() => {
	const { navigate } = useNavigation()
	const { params } = useRoute<EditMedicineRouteProp>()
	const { data, isLoading } = useMedicineById(params.id)

	const backHandler = useCallback(() => {
		navigate(ROUTES.HOME)
	}, [navigate])

	if (isLoading) {
		return <Loader />
	}

	if (!data) {
		return (
			<Center flex={1}>
				<Text>Not Found</Text>
				<Button onPress={backHandler}>Back</Button>
			</Center>
		)
	}

	return (
		<Center flex={1}>
			<Text>Edit Medicine Page</Text>
			<Form data={data} />
		</Center>
	)
})
