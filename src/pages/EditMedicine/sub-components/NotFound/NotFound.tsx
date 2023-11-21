import { FC, Fragment, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { EnumTabRoute } from '@app/enums'

export const NotFound: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const backHandler = useCallback(() => {
		// TODO: implement go back
		navigate(EnumTabRoute.home)
	}, [navigate])

	return (
		<Fragment>
			<Text>{t('editMedicine:notFound')}</Text>
			<Button onPress={backHandler}>{t('editMedicine:back')}</Button>
		</Fragment>
	)
})
