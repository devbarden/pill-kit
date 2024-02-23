import { FC, memo, useMemo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { PieChart } from 'react-native-chart-kit'
import { Box, Skeleton, Text } from 'native-base'
import { entries, groupBy, map, sumBy } from 'lodash'

import { TypeMedicine } from '@app/types'
import { useGlobalContext } from '@app/hooks'
import { EnumMedicineType } from '@app/enums'
import { getPercentageValue, uid } from '@app/utils'
import { MEDICINE_TYPE_COLORS } from '@app/constants'

import { AnalyticContext } from '../../context'

import { styles } from './Pie.styles'

export const Pie: FC = memo(() => {
	const { t } = useTranslation()
	const { locale, globalStyleProps } = useGlobalContext()
	const { allMedicines, isLoading } = useContext(AnalyticContext)

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const chartConfig = useMemo(
		() => ({
			backgroundGradientFrom: globalStyleProps.style.color.primary,
			backgroundGradientTo: globalStyleProps.style.color.primary,
			color: () => globalStyleProps.style.color.transparent,
		}),
		[globalStyleProps],
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
			style.indicator,
			{
				backgroundColor: color,
			},
		],
		[style],
	)

	if (isLoading) {
		return (
			<Box style={style.wrapper}>
				<Skeleton h={240} />
			</Box>
		)
	}

	return (
		<Box style={style.wrapper}>
			<Box style={style.content}>
				<PieChart
					paddingLeft="48"
					accessor="length"
					width={180}
					height={180}
					hasLegend={false}
					backgroundColor={globalStyleProps.style.color.primary}
					data={pieChartData}
					chartConfig={chartConfig}
				/>
				<Box style={style.title}>
					<Text
						fontSize="md"
						textAlign="center"
						numberOfLines={6}
						color={globalStyleProps.style.color.invert}>
						{t('analytic:pie.title')}
					</Text>
				</Box>
			</Box>

			<Box style={style.items}>
				{pieChartData.map(({ name, length, color }) => (
					<Box key={uid()} style={style.item}>
						<Box style={getIndicatorStyles(color)} />
						<Text numberOfLines={1} color={globalStyleProps.style.color.invert}>
							{t(`medicine:types.${name}`)}
						</Text>
						<Text color={globalStyleProps.style.color.invert}>
							{getPercentageValue(length / commonCount, locale)}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	)
})
