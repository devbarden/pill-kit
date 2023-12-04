import { FC, memo, useMemo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { PieChart } from 'react-native-chart-kit'
import { Box, Skeleton, Text } from 'native-base'
import { entries, groupBy, map, sumBy } from 'lodash'

import { TypeMedicine } from '@app/types'
import { getPercentageValue, uid } from '@app/utils'
import { MEDICINE_TYPE_COLORS } from '@app/constants'
import { EnumColor, EnumMedicineType } from '@app/enums'

import { AnalyticContext } from '../../context'

import { styles } from './Pie.styles'

export const Pie: FC = memo(() => {
	const { t } = useTranslation()
	const { allMedicines, isLoading } = useContext(AnalyticContext)

	const chartConfig = useMemo(
		() => ({
			backgroundGradientFrom: EnumColor.white,
			backgroundGradientTo: EnumColor.white,
			color: () => EnumColor.transparentGrey,
		}),
		[],
	)

	const pieChartData = useMemo(() => {
		const groupTypeMap: Record<string, TypeMedicine[]> = groupBy(
			allMedicines,
			'type',
		)

		const data = map(entries(groupTypeMap), ([name, { length }]) => ({
			name,
			length,
			color: MEDICINE_TYPE_COLORS[name as EnumMedicineType],
		}))

		return data
	}, [allMedicines])

	const commonCount = useMemo(
		() => sumBy(pieChartData, ({ length }) => length),
		[pieChartData],
	)

	const getIndicatorStyles = useCallback(
		(color: string) => [
			styles.indicator,
			{
				backgroundColor: color,
			},
		],
		[],
	)

	if (isLoading) {
		return (
			<Box style={styles.wrapper}>
				<Skeleton h={240} />
			</Box>
		)
	}

	return (
		<Box style={styles.wrapper}>
			<Box style={styles.content}>
				<PieChart
					paddingLeft="48"
					accessor="length"
					width={180}
					height={180}
					hasLegend={false}
					backgroundColor={EnumColor.white}
					data={pieChartData}
					chartConfig={chartConfig}
				/>
				<Box style={styles.title}>
					<Text fontSize="md" textAlign="center" numberOfLines={6}>
						{t('analytic:pie.title')}
					</Text>
				</Box>
			</Box>

			<Box style={styles.items}>
				{pieChartData.map(({ name, length, color }) => (
					<Box key={uid()} style={styles.item}>
						<Box style={getIndicatorStyles(color)} />
						<Text numberOfLines={1}>{t(`medicine:types.${name}`)}:</Text>
						<Text>{getPercentageValue(length / commonCount)}</Text>
					</Box>
				))}
			</Box>
		</Box>
	)
})
