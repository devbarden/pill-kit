import { ReactElement, RefObject } from 'react'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

import { EnumMedicineType } from '@app/enums'

import { TypeSelectItem } from './select'
import { TypeModalHandlers } from './modal'
import {
	TypeMedicineTime,
	TypeMedicineWithoutId,
	TypeMedicineCountPerUse,
} from './medicine'

export type TypeMedicineFormProps = {
	data: TypeMedicineWithoutId

	submitHandler: (medicine: TypeMedicineWithoutId) => void
	isSubmitting: boolean

	additionalActions?: ReactElement | ReactElement[]
}

export type TypeMedicineFormContextProps = {
	modalNameRef: RefObject<TypeModalHandlers> | null
	modalTypeRef: RefObject<TypeModalHandlers> | null
	modalCountPerUseRef: RefObject<TypeModalHandlers> | null
	modalCountPerDayRef: RefObject<TypeModalHandlers> | null
	modalTimeRef: RefObject<TypeModalHandlers> | null

	openNameModal: () => void
	openTypeModal: () => void
	closeTypeModal: () => void
	openCountPerUseModal: () => void
	closeCountPerUseModal: () => void
	openCountPerDayModal: () => void
	closeCountPerDayModal: () => void
	openTimeModal: () => void
	closeTimeModal: () => void

	form: TypeMedicineWithoutId

	getCountPerUseValueByType: (
		countPerUse: TypeMedicineCountPerUse,
		type: EnumMedicineType,
	) => TypeMedicineCountPerUse
	getCountPerUseSelectItems: (type: EnumMedicineType) => TypeSelectItem[]
	getIsNeedToFillCountPerUse: (type: EnumMedicineType) => boolean

	changeNameHandler: (name: string) => void
	changeNameToEmptyHandler: () => void
	changeTypeHandler: (type: string) => void
	changeCountPerUseHandler: (countPerUse: string) => void
	changeCountPerDayHandler: (countPerDay: string) => void
	changeStartDateHandler: (event: DateTimePickerEvent, date?: Date) => void
	changeEndDateHandler: (event: DateTimePickerEvent, date?: Date) => void
	changeSwitchToggleHandler: () => void
	changeTimeHandler: (time: TypeMedicineTime, date?: Date) => void

	saveHandler: () => void
	backHandler: () => void

	isCancelBtnDisabled: boolean
	isSaveBtnDisabled: boolean
}

export type TypeSettingsFormContextProps = {
	termsOfUseRef: RefObject<TypeModalHandlers> | null
	removeAlertRef: RefObject<TypeModalHandlers> | null
	modalLanguageRef: RefObject<TypeModalHandlers> | null

	selectedLanguage: string

	changeLanguageHandler: (language: string) => void

	upgradeHandler: () => void
	mailHandler: () => void
	donateHandler: () => void
	rateHandler: () => void

	openLanguageModal: () => void
	closeLanguageModal: () => void

	openRemoveDataModal: () => void
	openTermsOfUseModal: () => void
}
