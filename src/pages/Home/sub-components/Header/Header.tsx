import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Stack } from 'native-base'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

export const Header: FC = memo(() => {
	const { t } = useTranslation()

	const addHandler = useCallback(() => {
		console.log('ADD')
	}, [])

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
