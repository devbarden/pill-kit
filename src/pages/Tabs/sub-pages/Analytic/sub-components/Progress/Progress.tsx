import { FC, memo, useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ProgressChart } from 'react-native-chart-kit'
import { Box, Text, Skeleton } from 'native-base'
import { map } from 'lodash'

import { EnumColor, EnumLanguageCode } from '@app/enums'
import { uid, getPercentageValue, getDivideValueByDates } from '@app/utils'

import { AnalyticContext } from '../../context'

import { styles, TypeStyleProps } from './Progress.styles'

export const Progress: FC = memo(() => {
	const { t, i18n } = useTranslation()
	const { activeMedicines, isLoading } = useContext(AnalyticContext)

	const isArabic = useMemo(
		() => i18n.language === EnumLanguageCode.ar,
		[i18n.language],
	)

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
		const { length } = activeMedicines

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
				strokeWidth: 16,
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
			style.indicator,
			{
				backgroundColor: progressChartData.colors[index],
			},
		],
		[style, progressChartData.colors],
	)

	if (isLoading) {
		return (
			<Box style={style.wrapper}>
				<Skeleton h={200} />
			</Box>
		)
	}

	return (
		<Box>
			<Box style={style.label}>
				<Text numberOfLines={1} color={EnumColor.white}>
					{t('analytic:progress.label')}
				</Text>
			</Box>

			<Box style={style.wrapper}>
				<ProgressChart
					hideLegend
					withCustomBarColorFromData
					width={180}
					height={180}
					data={progressChartData}
					chartConfig={chartConfig}
					{...flexibleConfig}
				/>

				<Box style={style.content}>
					<Text fontSize="md" textAlign="center" numberOfLines={1}>
						{t('analytic:progress.title')}
					</Text>

					<Box style={style.items}>
						{progressChartData.labels.map((name, index) => (
							<Box key={uid()} style={style.item}>
								<Box style={style.name}>
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
