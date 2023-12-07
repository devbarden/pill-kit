import { TypeRoute } from '@app/types'
import {
	EnumColor,
	EnumIconName,
	EnumTabRoute,
	EnumStackRoute,
} from '@app/enums'

import { Icon } from '../../../Icon'

const getIconProps = (isActive: boolean) => ({
	size: 24,
	color: isActive ? EnumColor.red : EnumColor.darkGrey,
})

export const getIcon = (route: TypeRoute, isActive: boolean) =>
	({
		[EnumTabRoute.home]: () => (
			<Icon name={EnumIconName.home} {...getIconProps(isActive)} />
		),
		[EnumTabRoute.analytic]: () => (
			<Icon name={EnumIconName.analytic} {...getIconProps(isActive)} />
		),
		[EnumStackRoute.createMedicine]: () => (
			<Icon name={EnumIconName.medical} {...getIconProps(isActive)} />
		),
		[EnumTabRoute.history]: () => (
			<Icon name={EnumIconName.history} {...getIconProps(isActive)} />
		),
		[EnumTabRoute.settings]: () => (
			<Icon name={EnumIconName.settings} {...getIconProps(isActive)} />
		),
	})[route as EnumTabRoute]
