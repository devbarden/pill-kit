import { FC, memo, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BarChart } from 'react-native-chart-kit'
import { Box, Text, Skeleton } from 'native-base'
import {
	map,
	range,
	reduce,
	filter,
	flatten,
	entries,
	forEach,
	groupBy,
	toString,
} from 'lodash'

import { EnumColor } from '@app/enums'

import { AnalyticContext } from '../../context'

import { styles } from './Bar.styles'

export const Bar: FC = memo(() => {
	const { t } = useTranslation()
	const { allMedicines, isLoading, screenWidth } = useContext(AnalyticContext)

	const hiddenSpaceSize = useMemo(() => 80, [])

	const chartWidth = useMemo(
		() => screenWidth + hiddenSpaceSize / 2,
		[screenWidth, hiddenSpaceSize],
	)

	const chartConfig = useMemo(
		() => ({
			backgroundGradientFrom: EnumColor.white,
			backgroundGradientTo: EnumColor.white,
			color: () => EnumColor.red,
		}),
		[],
	)

	const barChartData = useMemo(() => {
		const currentYear = new Date().getFullYear()

		const rangesList = map(allMedicines, ({ startDate, endDate }) => {
			const from = new Date(startDate).getFullYear()
			const to = new Date(endDate).getFullYear() + 1

			return range(from, to)
		})

		const filteredList = filter(
			flatten(rangesList),
			(year) => year <= currentYear,
		)

		const last5yearsList = range(currentYear - 4, currentYear + 1)

		const last5yearsMap = reduce(
			last5yearsList,
			(acc, year) => ({ ...acc, [year]: [] }),
			{},
		)

		const countOfMedicinesMap: Record<string, number[]> = {
			...last5yearsMap,
			...groupBy(filteredList),
		}

		const labels: string[] = []
		const data: number[] = []

		forEach(entries(countOfMedicinesMap), ([year, { length }]) => {
			labels.push(toString(year))
			data.push(length)
		})

		return {
			labels,
			datasets: [
				{
					data,
				},
			],
		}
	}, [allMedicines])

	if (isLoading) {
		return (
			<Box style={styles.wrapper}>
				<Skeleton h={240} />
			</Box>
		)
	}

	return (
		<Box style={styles.wrapper}>
			<Text fontSize="md" textAlign="center" numberOfLines={2}>
				{t('analytic:bar.title')}
			</Text>
			<BarChart
				fromZero
				yAxisLabel="auto"
				yAxisSuffix="auto"
				showValuesOnTopOfBars
				withInnerLines={false}
				withHorizontalLabels={false}
				height={160}
				width={chartWidth}
				data={barChartData}
				chartConfig={chartConfig}
				style={{ position: 'relative', left: -hiddenSpaceSize }}
			/>
		</Box>
	)
})
