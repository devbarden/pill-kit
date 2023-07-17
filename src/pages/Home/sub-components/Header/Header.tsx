import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Stack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { ROUTES } from '@app/types'

export const Header: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const addHandler = useCallback(() => {
		navigate(ROUTES.CREATE_MEDICINE)
	}, [navigate])

	return (
		<Stack direction="row" justifyContent="flex-end">
			<Button
				onPress={addHandler}
				size="lg"
				colorScheme="secondary"
				endIcon={<Icon name="pill" color="white" size={24} />}>
				{t('home:addButton')}
			</Button>
		</Stack>
	)
})
