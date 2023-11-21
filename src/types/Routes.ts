import { RouteProp } from '@react-navigation/native'

import { TypeMedicineId } from '@app/types'
import { EnumStackRoute, EnumTabRoute } from '@app/enums'

export type TypeRoute = EnumTabRoute | EnumStackRoute

export type TypeNavigatorStack = {
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
