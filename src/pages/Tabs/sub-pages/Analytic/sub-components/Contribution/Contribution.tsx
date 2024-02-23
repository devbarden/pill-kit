import { FC, memo, useMemo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ContributionGraph } from 'react-native-chart-kit'
import { Box, Text, Skeleton } from 'native-base'
import { RectProps } from 'react-native-svg'
import { entries, flatten, map, reduce } from 'lodash'

import { useGlobalContext } from '@app/hooks'
import { getDaysArrayInRange, transformRGBToRGBA } from '@app/utils'

import { AnalyticContext } from '../../context'

import { styles } from './Contribution.styles'

export const Contribution: FC = memo(() => {
	const { t } = useTranslation()
	const { allMedicines, isLoading } = useContext(AnalyticContext)
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const contributionEndDate = useMemo(() => {
		return new Date()
	}, [])

	const chartConfig = useMemo(
		() => ({
			backgroundGradientFrom: globalStyleProps.style.color.primary,
			backgroundGradientTo: globalStyleProps.style.color.primary,
			color: (opacity: number) =>
				opacity <= 0.15
					? globalStyleProps.style.color.secondary
					: transformRGBToRGBA(globalStyleProps.style.color.main, opacity),
		}),
		[globalStyleProps],
	)

	const contributionChartData = useMemo(() => {
		const daysList = flatten(
			map(allMedicines, ({ startDate, endDate }) =>
				getDaysArrayInRange(startDate, endDate),
			),
		)

		const daysCountsMap = entries(
			reduce(
				daysList,
				(acc, currentValue) => ({
					...acc,
					[currentValue]: (acc[currentValue] | 0) + 1,
				}),
				{} as Record<string, number>,
			),
		)

		const data = map(daysCountsMap, ([date, count]) => ({
			date,
			count,
		}))

		return data
	}, [allMedicines])

	const getTooltipDataAttrs = useCallback((): Partial<RectProps> => ({}), [])

	if (isLoading) {
		return (
			<Box style={style.wrapper}>
				<Skeleton h={180} />
			</Box>
		)
	}

	return (
		<Box style={style.wrapper}>
			<Box style={style.content}>
				<Box style={style.info}>
					<Text
						textAlign="center"
						fontSize="md"
						color={globalStyleProps.style.color.invert}>
						{t('analytic:contribution.title')}
					</Text>
				</Box>
				<ContributionGraph
					chartConfig={chartConfig}
					values={contributionChartData}
					endDate={contributionEndDate}
					tooltipDataAttrs={getTooltipDataAttrs}
					gutterSize={2}
					squareSize={12}
					numDays={60}
					width={140}
					height={140}
					horizontal={false}
					showMonthLabels={false}
				/>
			</Box>
		</Box>
	)
})
