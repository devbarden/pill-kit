import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ProgressChart } from 'react-native-chart-kit'
import { Box, Text, Skeleton } from 'native-base'
import { map } from 'lodash'

import { EnumColor } from '@app/enums'
import { TypeMedicine } from '@app/types'
import { uid, getPercentageValue, getDivideValueByDates } from '@app/utils'

import { styles } from './Progress.styles'

type TypeProps = {
	medicines: TypeMedicine[]
	isLoading: boolean
	size: number
}

export const Progress: FC<TypeProps> = memo(
	({ medicines, isLoading, size }) => {
		const { t } = useTranslation()

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
				labels: map(medicines, ({ name }) => name),
				colors: map(medicines, ({ color }) => color),
				data: map(medicines, ({ startDate, endDate }) =>
					getDivideValueByDates(startDate, endDate),
				),
			}),
			[medicines],
		)

		const flexibleConfig = useMemo(() => {
			const { length } = medicines

			if (length > 10) {
				return {
					radius: 4,
					strokeWidth: 2,
				}
			}

			if (length > 8) {
				return {
					radius: 8,
					strokeWidth: 4,
				}
			}

			if (length > 6) {
				return {
					radius: 12,
					strokeWidth: 6,
				}
			}

			if (length > 4) {
				return {
					radius: 16,
					strokeWidth: 8,
				}
			}

			if (length === 2) {
				return {
					radius: 32,
					strokeWidth: 16,
				}
			}

			if (length === 1) {
				return {
					radius: 48,
					strokeWidth: 32,
				}
			}

			return {
				radius: 24,
				strokeWidth: 12,
			}
		}, [medicines])

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
								<Box key={uid()} style={styles.item}>
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
	},
)
