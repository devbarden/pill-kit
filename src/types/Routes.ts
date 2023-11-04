import { RouteProp } from '@react-navigation/native'

import { ROUTES } from '@app/constants'
import { MedicineId } from '@app/types'

export type StackTypes = {
	[ROUTES.HOME]: undefined
	[ROUTES.EDIT_MEDICINE]: { id: MedicineId }
	[ROUTES.CREATE_MEDICINE]: undefined
}

export type HomeRouteProp = RouteProp<StackTypes, ROUTES.HOME>

export type EditMedicineRouteProp = RouteProp<StackTypes, ROUTES.EDIT_MEDICINE>

export type CreateMedicineRouteProp = RouteProp<
	StackTypes,
	ROUTES.CREATE_MEDICINE
>
