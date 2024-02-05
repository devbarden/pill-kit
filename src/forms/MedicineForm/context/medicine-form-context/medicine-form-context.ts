import { createContext } from 'react'

import { TypeMedicineFormContextProps } from '@app/types'
import { DEFAULT_EMPTY_MEDICINE } from '@app/constants'

export const MedicineFormContext = createContext<TypeMedicineFormContextProps>({
	modalNameRef: null,
	modalTypeRef: null,
	modalColorRef: null,
	modalCountPerUseRef: null,
	modalCountPerDayRef: null,
	modalTimeRef: null,
	modalValidationRef: null,

	data: DEFAULT_EMPTY_MEDICINE,
	submitHandler: () => {},
	isSubmitting: false,

	form: DEFAULT_EMPTY_MEDICINE,
	emptyFields: [],
	mapOfRemindersToShow: {},

	isSaveBtnDisabled: false,
	isNeedToShowStartDateModal: false,
	isNeedToShowEndDateModal: false,

	openNameModal: () => {},
	closeNameModal: () => {},
	openTypeModal: () => {},
	closeTypeModal: () => {},
	openCountPerUseModal: () => {},
	closeCountPerUseModal: () => {},
	openCountPerDayModal: () => {},
	closeCountPerDayModal: () => {},
	openTimeModal: () => {},
	closeTimeModal: () => {},
	openColorModal: () => {},
	closeColorModal: () => {},
	openValidationModal: () => {},
	closeValidationModal: () => {},
	openStartDateModal: () => {},
	closeStartDateModal: () => {},
	openEndDateModal: () => {},
	closeEndDateModal: () => {},
	openReminderModal: () => {},
	closeReminderModal: () => {},

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
	changeColorHandler: () => {},

	backHandler: () => {},
	saveHandler: () => {},
})
