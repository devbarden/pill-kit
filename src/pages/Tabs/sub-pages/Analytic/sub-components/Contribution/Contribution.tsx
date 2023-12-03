import { FC, memo, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ContributionGraph } from 'react-native-chart-kit'
import { Box, Text, Skeleton } from 'native-base'
import { RectProps } from 'react-native-svg'
import { entries, flatten, map, reduce } from 'lodash'

import { EnumColor } from '@app/enums'
import { TypeMedicine } from '@app/types'
import { getDaysArrayInRange, transformRGBToRGBA } from '@app/utils'

import { styles } from './Contribution.styles'

type TypeProps = {
	medicines: TypeMedicine[]
	isLoading: boolean
	size: number
}

export const Contribution: FC<TypeProps> = memo(
	({ medicines, isLoading, size }) => {
		const { t } = useTranslation()

		const contributionEndDate = useMemo(() => {
			return new Date()
		}, [])

		const chartConfig = useMemo(
			() => ({
				backgroundGradientFrom: EnumColor.white,
				backgroundGradientTo: EnumColor.white,
				color: (opacity: number) =>
					opacity <= 0.15
						? EnumColor.grey
						: transformRGBToRGBA(EnumColor.red, opacity),
			}),
			[],
		)

		const contributionChartData = useMemo(() => {
			const daysList = flatten(
				map(medicines, ({ startDate, endDate }) =>
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
		}, [medicines])

		const getTooltipDataAttrs = useCallback((): Partial<RectProps> => ({}), [])

		if (isLoading) {
			return (
				<Box style={styles.wrapper}>
					<Skeleton h={size} />
				</Box>
			)
		}

		return (
			<Box style={styles.wrapper}>
				<Box style={styles.content}>
					<Box style={styles.info}>
						<Text textAlign="center" fontSize="md">
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
	},
)
