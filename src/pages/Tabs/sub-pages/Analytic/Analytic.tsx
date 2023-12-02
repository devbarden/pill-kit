import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ContentWrapper, Header, ScrollContent } from '@app/components'

import { Progress } from './sub-components'

export const Analytic: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Header title={t('analytic:title')} />
			<ContentWrapper>
				<ScrollContent>
					<Progress />
				</ScrollContent>
			</ContentWrapper>
		</Fragment>
	)
})
