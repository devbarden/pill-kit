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
	title: '',
	submitHandler: () => {},
	isSubmitting: false,

	form: DEFAULT_EMPTY_MEDICINE,
	emptyFields: [],
	isSaveBtnDisabled: false,
	isNeedToShowStartDateCalendar: false,
	isNeedToShowEndDateCalendar: false,

	openStartDateCalendar: () => {},
	openEndDateCalendar: () => {},

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
	changeIOSTimeHandler: () => {},
	changeAndroidTimeHandler: () => {},
	changeColorHandler: () => {},

	backHandler: () => {},
	saveHandler: () => {},
})
