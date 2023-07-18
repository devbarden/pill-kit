import AsyncStorage from '@react-native-async-storage/async-storage'
import { nanoid } from 'nanoid'

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
		const data: StorageData = await AsyncStorage.getItem(STORAGE.MEDICINES)
		const medicines: Medicine[] = data ? JSON.parse(data) : []

		return medicines
	} catch {
		return []
	}
}

export const getMedicine = async (id: MedicineId) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const medicine: PossibleMedicine =
			medicines.find((item) => item.id === id) ?? null

		return medicine
	} catch {
		return null
	}
}

export const setMedicine = async (data: MedicineWithoutId) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const newMedicine = { id: nanoid(), ...data }
		const newMedicines: Medicine[] = [...medicines, newMedicine]
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch {}
}

export const editMedicine = async (id: MedicineId, data: MedicineWithoutId) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const updatedMedicine = { id, ...data }
		const newMedicines: Medicine[] = medicines.map((item) =>
			item.id === id ? updatedMedicine : item,
		)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch {}
}

export const removeMedicine = async (id: MedicineId) => {
	try {
		const medicines: Medicine[] = await getMedicines()
		const newMedicines: Medicine[] = medicines.filter((item) => item.id !== id)
		const stringifiedMedicines = JSON.stringify(newMedicines)

		await AsyncStorage.setItem(STORAGE.MEDICINES, stringifiedMedicines)
	} catch {}
}
