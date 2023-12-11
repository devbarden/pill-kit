import { RouteProp } from '@react-navigation/native'

import { EnumStackRoute, EnumTabRoute } from '@app/enums'

import { TypeMedicineId } from './medicine'

export type TypeRoute = EnumTabRoute | EnumStackRoute

export type TypeNavigatorStack = {
	[EnumStackRoute.welcome]: undefined
	[EnumStackRoute.tabs]: undefined
	[EnumStackRoute.createMedicine]: undefined
	[EnumStackRoute.editMedicine]: { id: TypeMedicineId }
}

export type TypeNavigatorTab = {
	[EnumTabRoute.home]: undefined
	[EnumTabRoute.analytic]: undefined
	[EnumTabRoute.history]: undefined
	[EnumTabRoute.settings]: undefined
}

export type TypeNavigatorScreen = TypeNavigatorStack & TypeNavigatorTab

export type TypeHomeRouteProp = RouteProp<TypeNavigatorTab, EnumTabRoute.home>

export type TypeHistoryRouteProp = RouteProp<
	TypeNavigatorTab,
	EnumTabRoute.history
>

export type TypeSettingsRouteProp = RouteProp<
	TypeNavigatorTab,
	EnumTabRoute.settings
>

export type TypeWelcomeRouteProp = RouteProp<
	TypeNavigatorStack,
	EnumStackRoute.welcome
>

export type TypeTabsRouteProp = RouteProp<
	TypeNavigatorStack,
	EnumStackRoute.tabs
>

export type TypeEditMedicineRouteProp = RouteProp<
	TypeNavigatorStack,
	EnumStackRoute.editMedicine
>

export type TypeCreateMedicineRouteProp = RouteProp<
	TypeNavigatorStack,
	EnumStackRoute.createMedicine
>
