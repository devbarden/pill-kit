import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text } from 'native-base'

import { Icon } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Box style={styles.wrapper}>
			<Icon name={EnumIconName.noData} size={96} color={EnumColor.darkGrey} />
			<Text fontSize="xl" color={EnumColor.darkGrey}>
				{t('history:empty')}
			</Text>
		</Box>
	)
})
