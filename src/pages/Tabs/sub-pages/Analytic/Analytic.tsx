import { FC, Fragment, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Header, ScrollContent, ContentWrapper } from '@app/components'

import { useAnalyticState } from './hooks'
import { AnalyticContext } from './context'
import { Empty, Progress, Bar, Pie, Contribution } from './sub-components'

export const Analytic: FC = memo(() => {
	const state = useAnalyticState()

	const { t } = useTranslation()
	const { isNoMedicines, isProgressChartAvailable } = useMemo(
		() => state,
		[state],
	)

	if (isNoMedicines) {
		return <Empty />
	}

	return (
		<AnalyticContext.Provider value={state}>
			<Header title={t('analytic:title')} />
			<ContentWrapper>
				<ScrollContent>
					<Fragment>
						{isProgressChartAvailable && <Progress />}
						<Bar />
						<Pie />
						<Contribution />
					</Fragment>
				</ScrollContent>
			</ContentWrapper>
		</AnalyticContext.Provider>
	)
})
