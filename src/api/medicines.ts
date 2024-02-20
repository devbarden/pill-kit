import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumStorage, EnumError } from '@app/enums'
import {
	uid,
	delay,
	isAnyFieldEmpty,
	getMedicineWithoutId,
	getMedicineWithoutCountPerUseField,
} from '@app/utils'
import {
	TypeMedicine,
	TypeMedicineId,
	TypeStorageData,
	TypePossibleMedicine,
	TypeMedicineWithoutId,
} from '@app/types'

import {
	setCalendarEvent,
	updateCalendarEvent,
	cancelCalendarEvent,
	cancelAllCalendarEvents,
} from './calendar'

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

		await delay(400)
		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await setCalendarEvent(newMedicine, subtitle)
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

		await delay(400)
		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await updateCalendarEvent(updatedMedicine, subtitle)
	} catch {}
}

export const removeMedicine = async (id: TypeMedicineId) => {
	try {
		const medicines: TypeMedicine[] = await getMedicines()
		const newMedicines: TypeMedicine[] = medicines.filter(
			(item) => item.id !== id,
		)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await delay(800)
		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await cancelCalendarEvent(id)
	} catch {}
}

export const removeAllMedicines = async () => {
	try {
		const newMedicines: TypeMedicine[] = []
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await delay(400)
		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
		await cancelAllCalendarEvents()
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
