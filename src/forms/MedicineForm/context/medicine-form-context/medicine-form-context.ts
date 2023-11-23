import { createContext } from 'react'

import { EnumMedicineType } from '@app/enums'
import { TypeMedicineFormContextProps } from '@app/types'

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

	form: {
		name: '',
		type: EnumMedicineType.pill,
		countPerUse: '',
		countPerDay: '',
		notification: true,
		startDate: 0,
		endDate: 0,
	},

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
