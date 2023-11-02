import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { ROUTES } from '@app/types'

export const NotFound: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const backHandler = useCallback(() => {
		navigate(ROUTES.HOME)
	}, [navigate])

	return (
		<>
			<Text>{t('editMedicine:notFound')}</Text>
			<Button onPress={backHandler}>{t('editMedicine:back')}</Button>
		</>
	)
})
