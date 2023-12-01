import { omit } from 'lodash'

import { TypePossibleMedicine, TypeMedicineWithoutId } from '@app/types'

export const getMedicineWithoutCountPerUseField = (
	medicine: TypePossibleMedicine | TypeMedicineWithoutId,
) => omit(medicine, ['countPerUse'])

export const getMedicineWithoutId = (medicine: TypePossibleMedicine) =>
	omit(medicine, ['id'])
