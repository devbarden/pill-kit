import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Dimensions } from 'react-native'
import { Box, Text, Skeleton } from 'native-base'
import { ProgressChart } from 'react-native-chart-kit'
import { map } from 'lodash'

import { EnumColor } from '@app/enums'
import { useEndpoints } from '@app/hooks'
import { ANALYTIC_FILTERS_OF_ACTIVE } from '@app/constants'
import {
	medicineUtils,
	getPercentageValue,
	getDivideValueByDates,
} from '@app/utils'

import { styles } from './Progress.styles'

export const Progress: FC = memo(() => {
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

	const chartConfig = useMemo(
		() => ({
			backgroundGradientFrom: EnumColor.white,
			backgroundGradientTo: EnumColor.white,
			color: () => EnumColor.transparentGrey,
		}),
		[],
	)

	const progressChartData = useMemo(
		() => ({
			labels: map(activeMedicines, ({ name }) => name),
			colors: map(activeMedicines, ({ color }) => color),
			data: map(activeMedicines, ({ startDate, endDate }) =>
				getDivideValueByDates(startDate, endDate),
			),
		}),
		[activeMedicines],
	)

	const flexibleConfig = useMemo(() => {
		if (activeMedicines.length > 4) {
			return {
				radius: 16,
				strokeWidth: 8,
			}
		}

		return {
			radius: 24,
			strokeWidth: 12,
		}
	}, [activeMedicines])

	const getProgressPercentage = useCallback(
		(index: number) => getPercentageValue(progressChartData.data[index]),
		[progressChartData.data],
	)

	const getIndicatorStyles = useCallback(
		(index: number) => [
			styles.indicator,
			{
				backgroundColor: progressChartData.colors[index],
			},
		],
		[progressChartData.colors],
	)

	if (isLoading) {
		return (
			<Box style={styles.wrapper}>
				<Skeleton h={size} />
			</Box>
		)
	}

	return (
		<Box>
			<Box style={styles.label}>
				<Text numberOfLines={1} color={EnumColor.white}>
					{t('analytic:progress.label')}
				</Text>
			</Box>

			<Box style={styles.wrapper}>
				<ProgressChart
					hideLegend
					withCustomBarColorFromData
					width={size}
					height={size}
					data={progressChartData}
					chartConfig={chartConfig}
					{...flexibleConfig}
				/>

				<Box style={styles.content}>
					<Text fontSize="md" textAlign="center" numberOfLines={1}>
						{t('analytic:progress.title')}
					</Text>

					<Box style={styles.items}>
						{progressChartData.labels.map((name, index) => (
							<Box style={styles.item}>
								<Box style={styles.name}>
									<Box style={getIndicatorStyles(index)} />
									<Text numberOfLines={1}>{name}</Text>
								</Box>

								<Text numberOfLines={1}>{getProgressPercentage(index)}</Text>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	)
})
