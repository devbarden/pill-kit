import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { ContentWrapper, Header } from '@app/components'

export const Analytic: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<>
			<Header title={t('analytic:title')} />
			<ContentWrapper withHorizontalPaddings>
				<Text>Content</Text>
			</ContentWrapper>
		</>
	)
})
