import React, { FC, ReactElement, memo, useMemo } from 'react'
import {
	Entypo,
	Fontisto,
	Octicons,
	Ionicons,
	Foundation,
	MaterialIcons,
	MaterialCommunityIcons,
} from '@expo/vector-icons'

import { EnumIconName } from '@app/enums'

type TypeRequiredProps = {
	name: EnumIconName
}

type TypeAdditionalProps = {
	color?: string
	size?: number
}

type TypeProps = TypeRequiredProps & TypeAdditionalProps

const getIconByName = (
	name: EnumIconName,
	props: TypeAdditionalProps,
): ReactElement =>
	({
		[EnumIconName.light]: <Ionicons name="sunny" {...props} />,
		[EnumIconName.dark]: <Ionicons name="moon" {...props} />,
		[EnumIconName.pill]: <MaterialCommunityIcons name="pill" {...props} />,
		[EnumIconName.liquid]: (
			<MaterialCommunityIcons name="cup-water" {...props} />
		),
		[EnumIconName.injection]: <Fontisto name="injection-syringe" {...props} />,
		[EnumIconName.cream]: (
			<MaterialCommunityIcons name="liquid-spot" {...props} />
		),
		[EnumIconName.drops]: <Ionicons name="water" {...props} />,
		[EnumIconName.candles]: <MaterialCommunityIcons name="candle" {...props} />,
		[EnumIconName.pencil]: <MaterialCommunityIcons name="pencil" {...props} />,
		[EnumIconName.powder]: (
			<MaterialCommunityIcons name="dots-triangle" {...props} />
		),
		[EnumIconName.spray]: <MaterialCommunityIcons name="spray" {...props} />,
		[EnumIconName.bandage]: <Ionicons name="bandage-outline" {...props} />,
		[EnumIconName.time]: <Octicons name="clock" {...props} />,
		[EnumIconName.data]: (
			<MaterialCommunityIcons name="database-outline" {...props} />
		),
		[EnumIconName.noData]: (
			<MaterialCommunityIcons name="database-off-outline" {...props} />
		),
		[EnumIconName.mail]: <Octicons name="mail" {...props} />,
		[EnumIconName.home]: <Octicons name="home" {...props} />,
		[EnumIconName.info]: <Foundation name="info" {...props} />,
		[EnumIconName.gift]: <Octicons name="gift" {...props} />,
		[EnumIconName.bell]: <Octicons name="bell" {...props} />,
		[EnumIconName.search]: <Octicons name="search" {...props} />,
		[EnumIconName.settings]: <Octicons name="gear" {...props} />,
		[EnumIconName.star]: <Octicons name="star-fill" {...props} />,
		[EnumIconName.pie]: <Ionicons name="pie-chart-outline" {...props} />,
		[EnumIconName.chart]: (
			<MaterialCommunityIcons name="chart-bell-curve-cumulative" {...props} />
		),
		[EnumIconName.chartPlus]: (
			<MaterialCommunityIcons name="chart-box-plus-outline" {...props} />
		),
		[EnumIconName.chartTimeline]: (
			<MaterialCommunityIcons
				name="chart-timeline-variant-shimmer"
				{...props}
			/>
		),
		[EnumIconName.theme]: (
			<MaterialCommunityIcons name="theme-light-dark" {...props} />
		),
		[EnumIconName.share]: <Ionicons name="share-outline" {...props} />,
		[EnumIconName.analytic]: <Octicons name="graph" {...props} />,
		[EnumIconName.language]: <Octicons name="globe" {...props} />,
		[EnumIconName.sort]: <Octicons name="sort-desc" {...props} />,
		[EnumIconName.clear]: <Octicons name="x-circle" {...props} />,
		[EnumIconName.history]: <Octicons name="archive" {...props} />,
		[EnumIconName.back]: <Octicons name="chevron-left" {...props} />,
		[EnumIconName.bellOff]: <Octicons name="bell-slash" {...props} />,
		[EnumIconName.left]: <Octicons name="chevron-left" {...props} />,
		[EnumIconName.right]: <Octicons name="chevron-right" {...props} />,
		[EnumIconName.remove]: <Octicons name="trash" {...props} />,
		[EnumIconName.options]: <Ionicons name="options" {...props} />,
		[EnumIconName.add]: <Entypo name="add-to-list" {...props} />,
		[EnumIconName.check]: <Ionicons name="checkmark" {...props} />,
		[EnumIconName.count]: (
			<MaterialCommunityIcons name="format-list-numbered" {...props} />
		),
		[EnumIconName.text]: <MaterialCommunityIcons name="text" {...props} />,
		[EnumIconName.calendar]: (
			<MaterialCommunityIcons name="calendar-month" {...props} />
		),
		[EnumIconName.docs]: (
			<MaterialCommunityIcons name="file-document-outline" {...props} />
		),
		[EnumIconName.medicine]: (
			<MaterialCommunityIcons name="flask-empty-plus-outline" {...props} />
		),
		[EnumIconName.paint]: <Foundation name="paint-bucket" {...props} />,
		[EnumIconName.warning]: <MaterialIcons name="warning" {...props} />,
		[EnumIconName.error]: <MaterialIcons name="error" {...props} />,
		[EnumIconName.plus]: <Octicons name="plus-circle" {...props} />,
		[EnumIconName.medical]: <Ionicons name="medical-outline" {...props} />,
	})[name]

export const Icon: FC<TypeProps> = memo(({ name, ...rest }) => {
	const icon = useMemo(() => getIconByName(name, rest), [name, rest])

	return icon
})
