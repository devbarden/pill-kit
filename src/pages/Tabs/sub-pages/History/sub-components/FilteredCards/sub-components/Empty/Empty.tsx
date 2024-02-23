import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text } from 'native-base'

import { Icon } from '@app/components'
import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()
	const { globalStyleProps } = useGlobalContext()

	return (
		<Box style={styles.wrapper}>
			<Icon
				size={72}
				name={EnumIconName.search}
				color={globalStyleProps.style.color.highlight}
			/>
			<Text fontSize="lg" color={globalStyleProps.style.color.highlight}>
				{t('history:empty')}
			</Text>
		</Box>
	)
})
