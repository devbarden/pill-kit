import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text } from 'native-base'

import { COLORS } from '@app/constants'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Box style={styles.wrapper}>
			<Text fontSize="xl" color={COLORS.DARK_GREY}>
				{t('history:empty')}
			</Text>
		</Box>
	)
})
