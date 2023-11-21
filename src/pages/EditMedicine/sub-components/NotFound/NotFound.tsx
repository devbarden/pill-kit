import { FC, Fragment, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { GlobalStateContext } from '@app/context'

export const NotFound: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { activeTab } = useContext(GlobalStateContext)

	const backHandler = useCallback(() => {
		navigate(activeTab)
	}, [navigate, activeTab])

	return (
		<Fragment>
			<Text>{t('editMedicine:notFound')}</Text>
			<Button onPress={backHandler}>{t('editMedicine:back')}</Button>
		</Fragment>
	)
})
