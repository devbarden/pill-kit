import { Ionicons, Octicons, AntDesign } from '@expo/vector-icons'

import { COLORS, ROUTES } from '@app/constants'

const getIconProps = (isActive: boolean) => ({
	size: 24,
	color: isActive ? COLORS.RED : COLORS.DARK_GREY,
})

// TODO: refactoring
export const getIcon = (route: ROUTES, isActive: boolean) =>
	({
		[ROUTES.HOME]: () => <Octicons name="home" {...getIconProps(isActive)} />,
		[ROUTES.CREATE_MEDICINE]: () => (
			<AntDesign name="pluscircleo" {...getIconProps(isActive)} />
		),
		[ROUTES.HISTORY]: () => (
			<Octicons name="history" {...getIconProps(isActive)} />
		),
		[ROUTES.SETTINGS]: () => (
			<Ionicons name="settings-outline" {...getIconProps(isActive)} />
		),
	})[route as string]
