import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BarChart } from 'react-native-chart-kit'
import { Box, Text, Skeleton } from 'native-base'
import {
	map,
	range,
	flatten,
	reduce,
	filter,
	entries,
	toString,
	forEach,
} from 'lodash'

import { EnumColor } from '@app/enums'
import { TypeMedicine } from '@app/types'

import { styles } from './Bar.styles'

type TypeProps = {
	medicines: TypeMedicine[]
	isLoading: boolean
	size: number
}

export const Bar: FC<TypeProps> = memo(({ medicines, isLoading, size }) => {
	const { t } = useTranslation()

	const hiddenSpaceSize = useMemo(() => 80, [])

	const chartWidth = useMemo(
		() => size * 2 + hiddenSpaceSize / 2,
		[size, hiddenSpaceSize],
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

		const rangesList = map(medicines, ({ startDate, endDate }) => {
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
			(acc, year) => ({ ...acc, [year]: 0 }),
			{},
		)

		const countOfMedicinesMap = reduce(
			filteredList,
			(acc, currentValue) => ({
				...acc,
				[currentValue]: (acc[currentValue] | 0) + 1,
			}),
			{ ...last5yearsMap } as Record<string, number>,
		)

		const labels: string[] = []
		const data: number[] = []

		forEach(entries(countOfMedicinesMap), ([year, value]) => {
			labels.push(toString(year))
			data.push(value)
		})

		return {
			labels,
			datasets: [
				{
					data,
				},
			],
		}
	}, [medicines])

	if (isLoading) {
		return (
			<Box style={styles.wrapper}>
				<Skeleton h={size} />
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
				yAxisLabel=""
				yAxisSuffix=""
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
