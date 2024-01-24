import { FC, memo, useMemo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { PieChart } from 'react-native-chart-kit'
import { Box, Skeleton, Text } from 'native-base'
import { entries, groupBy, map, sumBy } from 'lodash'

import { TypeMedicine } from '@app/types'
import { GlobalStateContext } from '@app/context'
import { getPercentageValue, uid } from '@app/utils'
import { MEDICINE_TYPE_COLORS } from '@app/constants'
import { EnumColor, EnumLanguageCode, EnumMedicineType } from '@app/enums'

import { AnalyticContext } from '../../context'

import { styles, TypeStyleProps } from './Pie.styles'

export const Pie: FC = memo(() => {
	const { t } = useTranslation()
	const { language } = useContext(GlobalStateContext)
	const { allMedicines, isLoading } = useContext(AnalyticContext)

	const isArabic = useMemo(() => language === EnumLanguageCode.ar, [language])

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isArabic,
		}),
		[isArabic],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

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
					backgroundColor={EnumColor.white}
					data={pieChartData}
					chartConfig={chartConfig}
				/>
				<Box style={style.title}>
					<Text fontSize="md" textAlign="center" numberOfLines={6}>
						{t('analytic:pie.title')}
					</Text>
				</Box>
			</Box>

			<Box style={style.items}>
				{pieChartData.map(({ name, length, color }) => (
					<Box key={uid()} style={style.item}>
						<Box style={getIndicatorStyles(color)} />
						<Text numberOfLines={1}>{t(`medicine:types.${name}`)}</Text>
						<Text>{getPercentageValue(length / commonCount, language)}</Text>
					</Box>
				))}
			</Box>
		</Box>
	)
})
