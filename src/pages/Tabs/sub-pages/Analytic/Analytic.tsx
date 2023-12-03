import { FC, Fragment, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions } from 'react-native'

import { useEndpoints } from '@app/hooks'
import { medicineUtils } from '@app/utils'
import { ANALYTIC_FILTERS_OF_ACTIVE } from '@app/constants'
import { ContentWrapper, Header, ScrollContent } from '@app/components'

import { Progress, Bar, Contribution } from './sub-components'

export const Analytic: FC = memo(() => {
	const { t } = useTranslation()
	const { useMedicines } = useEndpoints()
	const { data: medicines = [], isLoading } = useMedicines()

	const size = useMemo(() => Dimensions.get('window').width / 2, [])

	const activeMedicines = useMemo(
		() =>
			medicineUtils.getMedicinesByFilters(
				medicines,
				ANALYTIC_FILTERS_OF_ACTIVE,
			),
		[medicines],
	)

	const isProgressChartAvailable = useMemo(
		() => activeMedicines.length > 0 && activeMedicines.length <= 20,
		[activeMedicines],
	)

	return (
		<Fragment>
			<Header title={t('analytic:title')} />
			<ContentWrapper>
				<ScrollContent>
					<Fragment>
						{isProgressChartAvailable && (
							<Progress
								medicines={activeMedicines}
								isLoading={isLoading}
								size={size}
							/>
						)}
						<Bar medicines={medicines} isLoading={isLoading} size={size} />
						<Contribution
							medicines={medicines}
							isLoading={isLoading}
							size={size}
						/>
					</Fragment>
				</ScrollContent>
			</ContentWrapper>
		</Fragment>
	)
})
