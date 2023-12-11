import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text, Link } from 'native-base'

import { EnumColor } from '@app/enums'
import { TERMS_OF_USE_LINK } from '@app/constants'

import { styles } from './CheckboxText.styles'

export const CheckboxText: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Box style={styles.wrapper}>
			<Text>
				{t('welcome:agreement')}{' '}
				<Link
					isExternal
					href={TERMS_OF_USE_LINK}
					mt={-0.25}
					_text={styles.link}
					color={EnumColor.blue}>
					{t('termsOfUse:title')}
				</Link>
			</Text>
		</Box>
	)
})
