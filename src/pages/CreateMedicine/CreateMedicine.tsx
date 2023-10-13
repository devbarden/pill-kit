import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Center, Text } from 'native-base'

import { Form } from './Form'

export const CreateMedicine: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Center flex={1}>
			<Text>{t('createMedicine:title')}</Text>
			<Form />
		</Center>
	)
})
