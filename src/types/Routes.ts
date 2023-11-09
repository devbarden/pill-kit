import { RouteProp } from '@react-navigation/native'

import { ROUTES } from '@app/constants'
import { MedicineId } from '@app/types'

export type NavigatorTypes = {
	[ROUTES.HOME]: undefined
	[ROUTES.HISTORY]: undefined
	[ROUTES.SETTINGS]: undefined
	[ROUTES.EDIT_MEDICINE]: { id: MedicineId }
	[ROUTES.CREATE_MEDICINE]: undefined
}

export type HomeRouteProp = RouteProp<NavigatorTypes, ROUTES.HOME>

export type HistoryRouteProp = RouteProp<NavigatorTypes, ROUTES.HISTORY>

export type SettingsRouteProp = RouteProp<NavigatorTypes, ROUTES.SETTINGS>

export type EditMedicineRouteProp = RouteProp<
	NavigatorTypes,
	ROUTES.EDIT_MEDICINE
>

export type CreateMedicineRouteProp = RouteProp<
	NavigatorTypes,
	ROUTES.CREATE_MEDICINE
>
