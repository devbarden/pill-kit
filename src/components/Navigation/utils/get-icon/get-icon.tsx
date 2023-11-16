import { Ionicons, Octicons } from '@expo/vector-icons'

import { COLORS, TAB_ROUTES } from '@app/constants'

const getIconProps = (isActive: boolean) => ({
	size: 24,
	color: isActive ? COLORS.RED : COLORS.DARK_GREY,
})

// TODO: refactoring
export const getIcon = (route: TAB_ROUTES, isActive: boolean) =>
	({
		[TAB_ROUTES.HOME]: () => (
			<Octicons name="home" {...getIconProps(isActive)} />
		),
		[TAB_ROUTES.HISTORY]: () => (
			<Octicons name="history" {...getIconProps(isActive)} />
		),
		[TAB_ROUTES.SETTINGS]: () => (
			<Ionicons name="settings-outline" {...getIconProps(isActive)} />
		),
	})[route as TAB_ROUTES]
