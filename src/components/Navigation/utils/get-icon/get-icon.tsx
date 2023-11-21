import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
	Octicons,
} from '@expo/vector-icons'

import { TypeRoute } from '@app/types'
import { EnumColor, EnumStackRoute, EnumTabRoute } from '@app/enums'

const getIconProps = (isActive: boolean) => ({
	size: 24,
	color: isActive ? EnumColor.red : EnumColor.darkGrey,
})

// TODO: refactoring
export const getIcon = (route: TypeRoute, isActive: boolean) =>
	({
		[EnumTabRoute.home]: () => (
			<Octicons name="home" {...getIconProps(isActive)} />
		),
		[EnumTabRoute.analytic]: () => (
			<MaterialCommunityIcons
				name="google-analytics"
				{...getIconProps(isActive)}
			/>
		),
		[EnumStackRoute.createMedicine]: () => (
			<AntDesign name="pluscircleo" {...getIconProps(isActive)} />
		),
		[EnumTabRoute.history]: () => (
			<Octicons name="history" {...getIconProps(isActive)} />
		),
		[EnumTabRoute.settings]: () => (
			<Ionicons name="settings-outline" {...getIconProps(isActive)} />
		),
	})[route as EnumTabRoute]
