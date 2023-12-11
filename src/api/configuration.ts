import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumStorage } from '@app/enums'
import { INITIAL_APP_CONFIGURATION } from '@app/constants'
import { TypeStorageData, TypeConfiguration } from '@app/types'

export const initConfiguration = async () => {
	try {
		const data: TypeStorageData = await AsyncStorage.getItem(
			EnumStorage.configuration,
		)

		if (data) {
			return JSON.parse(data)
		}

		const stringifiedData = JSON.stringify(INITIAL_APP_CONFIGURATION)

		await AsyncStorage.setItem(EnumStorage.configuration, stringifiedData)

		return INITIAL_APP_CONFIGURATION
	} catch {
		return INITIAL_APP_CONFIGURATION
	}
}

export const getConfiguration = async () => {
	try {
		const data: TypeStorageData = await AsyncStorage.getItem(
			EnumStorage.configuration,
		)
		const initialization: TypeConfiguration = data
			? JSON.parse(data)
			: INITIAL_APP_CONFIGURATION

		return initialization
	} catch {
		return INITIAL_APP_CONFIGURATION
	}
}

export const setConfiguration = async (data: TypeConfiguration) => {
	try {
		const stringifiedData = JSON.stringify(data)

		await AsyncStorage.setItem(EnumStorage.configuration, stringifiedData)
	} catch {}
}
