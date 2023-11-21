import AsyncStorage from '@react-native-async-storage/async-storage'
import { omit } from 'lodash'

import { isAnyFieldEmpty, uid } from '@app/utils'
import { EnumStorage, EnumError } from '@app/enums'
import {
	TypeMedicine,
	TypeMedicineId,
	TypeStorageData,
	TypePossibleMedicine,
	TypeMedicineWithoutId,
} from '@app/types'

export const initMedicines = async () => {
	try {
		const data: TypeStorageData = await AsyncStorage.getItem(
			EnumStorage.medicines,
		)

		if (data) {
			return data
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

		return omit(medicine, ['id'])
	} catch {
		return null
	}
}

export const setMedicine = async (data: TypeMedicineWithoutId) => {
	if (isAnyFieldEmpty(data)) {
		throw new Error(EnumError.fieldsNotFilled)
	}

	try {
		const medicines: TypeMedicine[] = await getMedicines()
		const newMedicine = { id: uid(), ...data }
		const newMedicines: TypeMedicine[] = [...medicines, newMedicine]
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
	} catch {}
}

export const editMedicine = async (
	id: TypeMedicineId,
	data: TypeMedicineWithoutId,
) => {
	if (isAnyFieldEmpty(data)) {
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
	} catch {}
}

export const removeAllMedicines = async () => {
	try {
		const newMedicines: TypeMedicine[] = []
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(EnumStorage.medicines, stringifiedMedicines)
	} catch {}
}
