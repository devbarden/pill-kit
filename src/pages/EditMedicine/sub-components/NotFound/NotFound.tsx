import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { TAB_ROUTES } from '@app/constants'

export const NotFound: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const backHandler = useCallback(() => {
		// TODO: implement go back
		navigate(TAB_ROUTES.HOME)
	}, [navigate])

	return (
		<>
			<Text>{t('editMedicine:notFound')}</Text>
			<Button onPress={backHandler}>{t('editMedicine:back')}</Button>
		</>
	)
})
