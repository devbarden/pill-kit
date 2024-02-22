import { ReactElement, RefObject } from 'react'

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

export type TypeMedicineFormContextProps = TypeMedicineFormProps & {
	modalNameRef: RefObject<TypeModalHandlers> | null
	modalTypeRef: RefObject<TypeModalHandlers> | null
	modalColorRef: RefObject<TypeModalHandlers> | null
	modalCountPerUseRef: RefObject<TypeModalHandlers> | null
	modalCountPerDayRef: RefObject<TypeModalHandlers> | null
	modalTimeRef: RefObject<TypeModalHandlers> | null
	modalValidationRef: RefObject<TypeModalHandlers> | null

	form: TypeMedicineWithoutId
	emptyFields: string[]
	mapOfRemindersToShow: Record<string, boolean>

	isSaveBtnDisabled: boolean
	isNeedToShowStartDateModal: boolean
	isNeedToShowEndDateModal: boolean

	openNameModal: () => void
	closeNameModal: () => void
	openTypeModal: () => void
	closeTypeModal: () => void
	openCountPerUseModal: () => void
	closeCountPerUseModal: () => void
	openCountPerDayModal: () => void
	closeCountPerDayModal: () => void
	openTimeModal: () => void
	closeTimeModal: () => void
	openColorModal: () => void
	closeColorModal: () => void
	openValidationModal: () => void
	closeValidationModal: () => void
	openStartDateModal: () => void
	closeStartDateModal: () => void
	openEndDateModal: () => void
	closeEndDateModal: () => void
	openReminderModal: (id: string) => void
	closeReminderModal: (id: string) => void

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
	changeStartDateHandler: (date: Date) => void
	changeEndDateHandler: (date: Date) => void
	changeSwitchToggleHandler: () => void
	changeTimeHandler: (time: TypeMedicineTime, date: Date) => void
	changeColorHandler: (color: string) => void

	backHandler: () => void
	saveHandler: () => void
}

export type TypeSettingsFormContextProps = {
	modalRemoveRef: RefObject<TypeModalHandlers> | null
	modalLanguageRef: RefObject<TypeModalHandlers> | null

	selectedLanguage: string

	isShareBtnAvailable: boolean

	mailHandler: () => void
	shareDataHandler: () => void
	termsOfUseHandler: () => void
	changeThemeHandler: () => void
	changeLanguageHandler: (locale: string) => void

	openRemoveModal: () => void
	closeRemoveModal: () => void

	openLanguageModal: () => void
	closeLanguageModal: () => void
}
