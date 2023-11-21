import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
	Octicons,
} from '@expo/vector-icons'

import { T_Route } from '@app/types'
import { COLORS, STACK_ROUTES, TAB_ROUTES } from '@app/constants'

const getIconProps = (isActive: boolean) => ({
	size: 24,
	color: isActive ? COLORS.RED : COLORS.DARK_GREY,
})

// TODO: refactoring
export const getIcon = (route: T_Route, isActive: boolean) =>
	({
		[TAB_ROUTES.HOME]: () => (
			<Octicons name="home" {...getIconProps(isActive)} />
		),
		[TAB_ROUTES.ANALYTIC]: () => (
			<MaterialCommunityIcons
				name="google-analytics"
				{...getIconProps(isActive)}
			/>
		),
		[STACK_ROUTES.CREATE_MEDICINE]: () => (
			<AntDesign name="pluscircleo" {...getIconProps(isActive)} />
		),
		[TAB_ROUTES.HISTORY]: () => (
			<Octicons name="history" {...getIconProps(isActive)} />
		),
		[TAB_ROUTES.SETTINGS]: () => (
			<Ionicons name="settings-outline" {...getIconProps(isActive)} />
		),
	})[route as TAB_ROUTES]
