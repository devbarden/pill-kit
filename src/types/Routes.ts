export enum ROUTES {
	HOME = 'Home',
	EDIT_MEDICINE = 'EditMedicine',
	CREATE_MEDICINE = 'CreateMedicine',
}

export type StackTypes = {
	[ROUTES.HOME]: undefined
	[ROUTES.EDIT_MEDICINE]: { id: string }
	[ROUTES.CREATE_MEDICINE]: undefined
}
