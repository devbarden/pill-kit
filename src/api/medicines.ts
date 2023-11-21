import AsyncStorage from '@react-native-async-storage/async-storage'
import { omit } from 'lodash'

import { ERRORS, STORAGE } from '@app/constants'
import { isAnyFieldEmpty, uid } from '@app/utils'
import {
	I_Medicine,
	T_MedicineId,
	T_StorageData,
	T_PossibleMedicine,
	T_MedicineWithoutId,
} from '@app/types'

export const initMedicines = async () => {
	try {
		const data: T_StorageData = await AsyncStorage.getItem(STORAGE.MEDICINES)

		if (data) {
			return data
		}

		const initialMedicines = JSON.stringify([])

		await AsyncStorage.setItem(STORAGE.MEDICINES, initialMedicines)

		return []
	} catch {
		return null
	}
}

export const getMedicines = async () => {
	try {
		const data: T_StorageData = await AsyncStorage.getItem(STORAGE.MEDICINES)
		const medicines: I_Medicine[] = data ? JSON.parse(data) : []

		return medicines
	} catch {
		return []
	}
}

export const getMedicine = async (id: T_MedicineId) => {
	try {
		const medicines: I_Medicine[] = await getMedicines()
		const medicine: T_PossibleMedicine =
			medicines.find((item) => item.id === id) ?? null

		return omit(medicine, ['id'])
	} catch {
		return null
	}
}

export const setMedicine = async (data: T_MedicineWithoutId) => {
	if (isAnyFieldEmpty(data)) {
		throw new Error(ERRORS.FIELDS_NOT_FILLED_IN)
	}

	try {
		const medicines: I_Medicine[] = await getMedicines()
		const newMedicine = { id: uid(), ...data }
		const newMedicines: I_Medicine[] = [...medicines, newMedicine]
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch {}
}

export const editMedicine = async (
	id: T_MedicineId,
	data: T_MedicineWithoutId,
) => {
	if (isAnyFieldEmpty(data)) {
		throw new Error(ERRORS.FIELDS_NOT_FILLED_IN)
	}

	try {
		const medicines: I_Medicine[] = await getMedicines()
		const updatedMedicine = { id, ...data }
		const newMedicines: I_Medicine[] = medicines.map((item) =>
			item.id === id ? updatedMedicine : item,
		)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch {}
}

export const removeMedicine = async (id: T_MedicineId) => {
	try {
		const medicines: I_Medicine[] = await getMedicines()
		const newMedicines: I_Medicine[] = medicines.filter(
			(item) => item.id !== id,
		)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch {}
}

export const removeAllMedicines = async () => {
	try {
		const newMedicines: I_Medicine[] = []
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch {}
}
