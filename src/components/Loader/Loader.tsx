import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Heading } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { COLORS } from '@app/constants'

import { styles } from './Loader.styles'

export const Loader: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Box style={styles.wrapper}>
			<MaterialCommunityIcons name="pill" size={128} color={COLORS.RED} />
			<Heading size="4xl" color={COLORS.RED}>
				{t('main:appTitle')}
			</Heading>
		</Box>
	)
})
