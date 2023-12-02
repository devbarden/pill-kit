import { createContext } from 'react'

import { TypeMedicineFormContextProps } from '@app/types'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'

export const MedicineFormContext = createContext<TypeMedicineFormContextProps>({
	modalNameRef: null,
	modalTypeRef: null,
	modalCountPerUseRef: null,
	modalCountPerDayRef: null,
	modalTimeRef: null,

	openNameModal: () => {},
	openTypeModal: () => {},
	closeTypeModal: () => {},
	openCountPerUseModal: () => {},
	closeCountPerUseModal: () => {},
	openCountPerDayModal: () => {},
	closeCountPerDayModal: () => {},
	openTimeModal: () => {},
	closeTimeModal: () => {},

	form: DEFAULT_EMPTY_MEDICINE,

	getCountPerUseValueByType: () => '',
	getCountPerUseSelectItems: () => [],
	getIsNeedToFillCountPerUse: () => true,

	changeNameHandler: () => {},
	changeNameToEmptyHandler: () => {},
	changeTypeHandler: () => {},
	changeCountPerUseHandler: () => {},
	changeCountPerDayHandler: () => {},
	changeStartDateHandler: () => {},
	changeEndDateHandler: () => {},
	changeSwitchToggleHandler: () => {},
	changeTimeHandler: () => {},

	saveHandler: () => {},
	backHandler: () => {},

	isCancelBtnDisabled: false,
	isSaveBtnDisabled: false,
})
