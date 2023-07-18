import { RouteProp } from '@react-navigation/native'

import { MedicineId } from '@app/types'

export enum ROUTES {
	HOME = 'Home',
	EDIT_MEDICINE = 'EditMedicine',
	CREATE_MEDICINE = 'CreateMedicine',
}

export type StackTypes = {
	[ROUTES.HOME]: undefined
	[ROUTES.EDIT_MEDICINE]: { id: MedicineId }
	[ROUTES.CREATE_MEDICINE]: undefined
}

export type HomeRouteProp = RouteProp<StackTypes, ROUTES.EDIT_MEDICINE>

export type EditMedicineRouteProp = RouteProp<StackTypes, ROUTES.EDIT_MEDICINE>

export type CreateMedicineRouteProp = RouteProp<
	StackTypes,
	ROUTES.EDIT_MEDICINE
>
