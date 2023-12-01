import { createContext } from 'react'

import { TypeMedicineFormContextProps } from '@app/types'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'

export const MedicineFormContext = createContext<TypeMedicineFormContextProps>({
	modalNameRef: null,
	modalTypeRef: null,
	modalCountPerUseRef: null,
	modalCountPerDayRef: null,

	openNameModal: () => {},
	openTypeModal: () => {},
	closeTypeModal: () => {},
	openCountPerUseModal: () => {},
	closeCountPerUseModal: () => {},
	openCountPerDayModal: () => {},
	closeCountPerDayModal: () => {},

	form: DEFAULT_EMPTY_MEDICINE,

	getIsNeedToFillCountPerUse: () => true,
	getCountPerUseSelectItems: () => [],

	changeNameHandler: () => {},
	changeNameToEmptyHandler: () => {},
	changeTypeHandler: () => {},
	changeCountPerUseHandler: () => {},
	changeCountPerDayHandler: () => {},
	changeStartDateHandler: () => {},
	changeEndDateHandler: () => {},
	changeSwitchToggleHandler: () => {},

	saveHandler: () => {},
	backHandler: () => {},

	isCancelBtnDisabled: false,
	isSaveBtnDisabled: false,
})
