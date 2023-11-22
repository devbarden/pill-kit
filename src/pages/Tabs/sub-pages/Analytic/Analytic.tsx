import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'native-base'

import { ContentWrapper, Header } from '@app/components'

export const Analytic: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Header title={t('analytic:title')} />
			<ContentWrapper withHorizontalPaddings withVerticalPaddings>
				<Text>Content</Text>
			</ContentWrapper>
		</Fragment>
	)
})
