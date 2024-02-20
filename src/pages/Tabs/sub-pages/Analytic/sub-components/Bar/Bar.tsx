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

import { DEVICE_WIDTH } from '@app/constants'
import { useGlobalContext } from '@app/hooks'
import { getNumberByLocale } from '@app/utils'
import { EnumColor, EnumLanguageCode } from '@app/enums'

import { AnalyticContext } from '../../context'

import { styles } from './Bar.styles'

export const Bar: FC = memo(() => {
	const { t } = useTranslation()
	const { locale } = useGlobalContext()
	const { allMedicines, isLoading } = useContext(AnalyticContext)

	const isAvailableToShowValuesOnBars = useMemo(
		() =>
			!locale.includes(EnumLanguageCode.ar) &&
			!locale.includes(EnumLanguageCode.bn),
		[locale],
	)

	const hiddenSpaceSize = useMemo(() => 80, [])

	const chartWidth = useMemo(
		() => DEVICE_WIDTH + hiddenSpaceSize / 2,
		[hiddenSpaceSize],
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
			labels.push(getNumberByLocale(toString(year), locale))
			data.push(length)
		})

		const lastFiveLabels =
			labels.length > 5 ? labels.slice(1).slice(-5) : labels
		const lastFiveData = data.length > 5 ? data.slice(1).slice(-5) : data

		return {
			labels: lastFiveLabels,
			datasets: [
				{
					data: lastFiveData,
				},
			],
		}
	}, [allMedicines, locale])

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
				showValuesOnTopOfBars={isAvailableToShowValuesOnBars}
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
