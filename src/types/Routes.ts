import { RouteProp } from '@react-navigation/native'

import { STACK_ROUTES, TAB_ROUTES } from '@app/constants'
import { T_MedicineId } from '@app/types'

export type T_Route = TAB_ROUTES | STACK_ROUTES

export type T_NavigatorStackTypes = {
	[STACK_ROUTES.TABS]: undefined
	[STACK_ROUTES.CREATE_MEDICINE]: undefined
	[STACK_ROUTES.EDIT_MEDICINE]: { id: T_MedicineId }
}

export type T_NavigatorTabTypes = {
	[TAB_ROUTES.HOME]: undefined
	[TAB_ROUTES.ANALYTIC]: undefined
	[TAB_ROUTES.HISTORY]: undefined
	[TAB_ROUTES.SETTINGS]: undefined
}

export type T_NavigatorTypes = T_NavigatorStackTypes & T_NavigatorTabTypes

export type T_HomeRouteProp = RouteProp<T_NavigatorTabTypes, TAB_ROUTES.HOME>

export type T_HistoryRouteProp = RouteProp<
	T_NavigatorTabTypes,
	TAB_ROUTES.HISTORY
>

export type T_SettingsRouteProp = RouteProp<
	T_NavigatorTabTypes,
	TAB_ROUTES.SETTINGS
>

export type T_TabsRouteProp = RouteProp<
	T_NavigatorStackTypes,
	STACK_ROUTES.TABS
>

export type T_EditMedicineRouteProp = RouteProp<
	T_NavigatorStackTypes,
	STACK_ROUTES.EDIT_MEDICINE
>

export type T_CreateMedicineRouteProp = RouteProp<
	T_NavigatorStackTypes,
	STACK_ROUTES.CREATE_MEDICINE
>
