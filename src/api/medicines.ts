import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumStorage, EnumError, EnumCardFilter } from '@app/enums'
import {
	uid,
	medicineUtils,
	isAnyFieldEmpty,
	getMedicineWithoutId,
	getMedicineWithoutCountPerUseField,
} from '@app/utils'
import {
	TypeMedicine,
	TypeMedicineId,
	TypeStorageData,
	TypeCardFilters,
	TypePossibleMedicine,
	TypeMedicineWithoutId,
} from '@app/types'

import {
	setNotifications,
	updateNotifications,
	cancelAllNotifications,
	cancelNotificationsById,
} from './notification'

export const initMedicines = async () => {
	try {
		const data: TypeStorageData = await AsyncStorage.getItem(
			EnumStorage.medicines,
		)

		if (data) {
			return JSON.parse(data)
		}

		const initialMedicines = JSON.stringify([])

		await AsyncStorage.setItem(EnumStorage.medicines, initialMedicines)

		return []
	} catch {
		return null
	}
}

export const getMedicines = async () => {
	try {
		const data: TypeStorageData = await AsyncStorage.getItem(
			EnumStorage.medicines,
		)
		const medicines: TypeMedicine[] = data ? JSON.parse(data) : []

		return medicines
	} catch {
		return []
	}
}

export const getMedicine = async (id: TypeMedicineId) => {
	try {
		const medicines: TypeMedicine[] = await getMedicines()
		const medicine: TypePossibleMedicine =
			medicines.find((item) => item.id === id) ?? null

		return getMedicineWithoutId(medicine)
	} catch {
		return null
	}
}

export const setMedicine = async (
	data: TypeMedicineWithoutId,
	subtitle: string,
) => {
	const medicineToValidate = getMedicineWithoutCountPerUseField(data)

	if (isAnyFieldEmpty(medicineToValidate)) {
		throw new Error(EnumError.fieldsNotFilled)
	}

	try {
		const medicines: TypeMedicine[] = await getMedicines()
		const id = uid()
		const newMedicine = { id, ...data }
		const newMedicines: TypeMedicine[] = [...medicines, newMedicine]
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await setNotifications(newMedicine, subtitle)
	} catch {}
}

export const editMedicine = async (
	id: TypeMedicineId,
	data: TypeMedicineWithoutId,
	subtitle: string,
) => {
	const medicineToValidate = getMedicineWithoutCountPerUseField(data)

	if (isAnyFieldEmpty(medicineToValidate)) {
		throw new Error(EnumError.fieldsNotFilled)
	}

	try {
		const medicines: TypeMedicine[] = await getMedicines()
		const updatedMedicine = { id, ...data }
		const newMedicines: TypeMedicine[] = medicines.map((item) =>
			item.id === id ? updatedMedicine : item,
		)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await updateNotifications(updatedMedicine, subtitle)
	} catch {}
}

export const removeMedicine = async (id: TypeMedicineId) => {
	try {
		const medicines: TypeMedicine[] = await getMedicines()
		const newMedicines: TypeMedicine[] = medicines.filter(
			(item) => item.id !== id,
		)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await cancelNotificationsById(id)
	} catch {}
}

export const removeAllMedicines = async () => {
	try {
		const newMedicines: TypeMedicine[] = []
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await cancelAllNotifications()
	} catch {}
}

export const updateActiveAndFutureMedicinesOrder = async (
	medicines: TypeMedicine[],
) => {
	try {
		const initialMedicines: TypeMedicine[] = await getMedicines()
		const listOfUpdatedMedicinesIds: string[] = medicines.map(({ id }) => id)
		const oldMedicines: TypeMedicine[] = initialMedicines.filter(
			({ id }) => !listOfUpdatedMedicinesIds.includes(id),
		)
		const updatedMedicines: TypeMedicine[] = [...oldMedicines, ...medicines]
		const stringifiedMedicines = JSON.stringify(updatedMedicines)

		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
	} catch {}
}

export const updateMedicinesNotificationsByLanguage = async (
	subtitle: string,
) => {
	try {
		await cancelAllNotifications()

		const medicines: TypeMedicine[] = await getMedicines()

		const activeMedicineFilter: TypeCardFilters = {
			[EnumCardFilter.active]: true,
			[EnumCardFilter.future]: true,
			[EnumCardFilter.past]: false,
		}

		const activeAndFutureMedicines = medicineUtils.getMedicinesByFilters(
			medicines,
			activeMedicineFilter,
		)

		for await (const medicine of activeAndFutureMedicines) {
			await setNotifications(medicine, subtitle)
		}
	} catch {}
}
