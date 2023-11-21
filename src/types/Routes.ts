import { RouteProp } from '@react-navigation/native'

import { STACK_ROUTES, TAB_ROUTES } from '@app/constants'
import { MedicineId } from '@app/types'

export type Route = TAB_ROUTES | STACK_ROUTES

export type NavigatorStackTypes = {
	[STACK_ROUTES.TABS]: undefined
	[STACK_ROUTES.CREATE_MEDICINE]: undefined
	[STACK_ROUTES.EDIT_MEDICINE]: { id: MedicineId }
}

export type NavigatorTabTypes = {
	[TAB_ROUTES.HOME]: undefined
	[TAB_ROUTES.ANALYTIC]: undefined
	[TAB_ROUTES.HISTORY]: undefined
	[TAB_ROUTES.SETTINGS]: undefined
}

export type NavigatorTypes = NavigatorStackTypes & NavigatorTabTypes

export type HomeRouteProp = RouteProp<NavigatorTabTypes, TAB_ROUTES.HOME>

export type HistoryRouteProp = RouteProp<NavigatorTabTypes, TAB_ROUTES.HISTORY>

export type SettingsRouteProp = RouteProp<
	NavigatorTabTypes,
	TAB_ROUTES.SETTINGS
>

export type TabsRouteProp = RouteProp<NavigatorStackTypes, STACK_ROUTES.TABS>

export type EditMedicineRouteProp = RouteProp<
	NavigatorStackTypes,
	STACK_ROUTES.EDIT_MEDICINE
>

export type CreateMedicineRouteProp = RouteProp<
	NavigatorStackTypes,
	STACK_ROUTES.CREATE_MEDICINE
>
