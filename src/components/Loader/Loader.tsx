import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Heading } from 'native-base'

import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../Icon'

import { styles } from './Loader.styles'

export const Loader: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Box style={styles.wrapper}>
			<Icon name={EnumIconName.pill} size={128} color={EnumColor.red} />
			<Heading size="4xl" color={EnumColor.red}>
				{t('main:appTitle')}
			</Heading>
		</Box>
	)
})
