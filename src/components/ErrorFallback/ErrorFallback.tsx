import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Text } from 'native-base'

import { EMAIL } from '@app/constants'
import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../Icon'

import { styles } from './ErrorFallback.styles'

type TypeProps = {
	error: Error
	resetError: Function
}

export const ErrorFallback: FC<TypeProps> = memo(({ error, resetError }) => {
	const { t } = useTranslation()

	const resetHandler = useCallback(() => {
		resetError()
	}, [resetError])

	return (
		<Box style={styles.wrapper}>
			<Icon name={EnumIconName.clear} color={EnumColor.red} size={36} />
			<Text fontSize="xl" textAlign="center" color={EnumColor.red}>
				{t('main:error.title')}: {EMAIL}
			</Text>
			<Text fontSize="sm">{error.message}</Text>
			<Button colorScheme={EnumColor.red} onPress={resetHandler}>
				{t('main:error.reset')}
			</Button>
		</Box>
	)
})
