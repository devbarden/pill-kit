import AsyncStorage from '@react-native-async-storage/async-storage'
import { nanoid } from 'nanoid'

import { notifyError } from '@app/utils'
import {
	STORAGE,
	StorageData,
	Medicine,
	PossibleMedicine,
	MedicineId,
	MedicineWithoutId,
} from '@app/types'

export const initMedicines = async () => {
	try {
		const data: StorageData = await AsyncStorage.getItem(STORAGE.MEDICINES)

		if (data) {
			return
		}

		const initialMedicines = JSON.stringify([])

		await AsyncStorage.setItem(STORAGE.MEDICINES, initialMedicines)
	} catch (error) {
		notifyError(error)
	}
}

export const getMedicines = async () => {
	try {
		const data: StorageData = await AsyncStorage.getItem(STORAGE.MEDICINES)
		const medicines: Medicine[] = data ? JSON.parse(data) : []

		return medicines
	} catch (error) {
		notifyError(error)

		return []
	}
}

export const getMedicineById = async (id: MedicineId) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const medicine: PossibleMedicine =
			medicines.find((item) => item.id === id) ?? null

		return medicine
	} catch (error) {
		notifyError(error)

		return null
	}
}

export const setMedicine = async (newMedicine: MedicineWithoutId) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const newMedicines: Medicine[] = [
			...medicines,
			{ ...newMedicine, id: nanoid() },
		]
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch (error) {
		notifyError(error)
	}
}

export const editMedicine = async (
	id: MedicineId,
	updatedMedicine: MedicineWithoutId,
) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const newMedicines: Medicine[] = medicines.map((item) =>
			item.id === id ? { id, ...updatedMedicine } : item,
		)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch (error) {
		notifyError(error)
	}
}

export const removeMedicineById = async (id: MedicineId) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const newMedicines: Medicine[] = medicines.filter((item) => item.id !== id)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch (error) {
		notifyError(error)
	}
}
