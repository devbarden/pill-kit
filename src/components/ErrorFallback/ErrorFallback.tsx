import { FC, memo, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Text } from 'native-base'

import { EMAIL } from '@app/constants'
import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { Icon } from '../Icon'

import { styles } from './ErrorFallback.styles'

type TypeProps = {
	error: Error
	resetError: Function
}

export const ErrorFallback: FC<TypeProps> = memo(({ error, resetError }) => {
	const { t } = useTranslation()
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const resetHandler = useCallback(() => {
		resetError()
	}, [resetError])

	return (
		<Box style={style.wrapper}>
			<Icon
				name={EnumIconName.clear}
				color={globalStyleProps.style.color.remove}
				size={36}
			/>
			<Text
				fontSize="xl"
				textAlign="center"
				color={globalStyleProps.style.color.remove}>
				{t('error:title')}: {EMAIL}
			</Text>
			<Text fontSize="sm" color={globalStyleProps.style.color.invert}>
				{error.message}
			</Text>
			<Button
				colorScheme={globalStyleProps.style.color.remove}
				onPress={resetHandler}>
				{t('error:reset')}
			</Button>
		</Box>
	)
})
