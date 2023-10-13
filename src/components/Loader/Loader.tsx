import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Heading } from 'native-base'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { colors } from '@app/constants'

import { styles } from './Loader.styles'

export const Loader: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Box style={styles.wrapper}>
			<Icon name="pill" size={128} color={colors.purple} />
			<Heading size="4xl" color={colors.purple}>
				{t('main:appTitle')}
			</Heading>
		</Box>
	)
})
