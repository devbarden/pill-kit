import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button } from 'native-base'

import { useMedicines } from '@app/hooks'

export const Home: FC = memo(() => {
	const { t, i18n } = useTranslation()
	const { data, isLoading } = useMedicines()

	console.log(data, isLoading)

	const languageHandler = useCallback(
		(language: string) => {
			i18n.changeLanguage(language)
		},
		[i18n],
	)

	return (
		<Box>
			<Button onPress={() => languageHandler('en')}>Switch To EN</Button>
			<Button onPress={() => languageHandler('ru')}>Switch To RU</Button>
			{t('main:title')}
		</Box>
	)
})
