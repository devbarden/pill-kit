import { FC, Fragment, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Button, Text } from 'native-base'

import { GlobalStateContext } from '@app/context'
import { ContentWrapper, Header } from '@app/components'

export const NotFound: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()
	const { activeTab } = useContext(GlobalStateContext)

	const backHandler = useCallback(() => {
		navigate(activeTab)
	}, [navigate, activeTab])

	return (
		<Fragment>
			<Header title={t('editMedicine:title')} withGoBack />
			<ContentWrapper withHorizontalPaddings withVerticalPaddings>
				<Text>{t('editMedicine:notFound')}</Text>
				<Button onPress={backHandler}>{t('editMedicine:back')}</Button>
			</ContentWrapper>
		</Fragment>
	)
})
