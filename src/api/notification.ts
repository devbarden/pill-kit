import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { EnumStorage } from '@app/enums'
import { INITIAL_NOTIFICATION_STORAGE } from '@app/constants'
import { TypeMedicine, TypeNotificationStorage } from '@app/types'
import {
	getAllDatesByDaysAndTimes,
	scheduleNotificationCallback,
} from '@app/utils'

const getNotificationStorage = async () => {
	try {
		const data = await AsyncStorage.getItem(EnumStorage.notifications)
		const notificationStorage: TypeNotificationStorage = data
			? JSON.parse(data)
			: INITIAL_NOTIFICATION_STORAGE

		return notificationStorage
	} catch {
		return INITIAL_NOTIFICATION_STORAGE
	}
}

const setNotificationStorage = async (data: TypeNotificationStorage) => {
	try {
		const stringifiedData = JSON.stringify(data)

		await AsyncStorage.setItem(EnumStorage.notifications, stringifiedData)
	} catch {}
}

export const cancelAllNotifications = async () => {
	try {
		await Notifications.cancelAllScheduledNotificationsAsync()
		await setNotificationStorage(INITIAL_NOTIFICATION_STORAGE)
	} catch {}
}

export const cancelNotificationsById = async (id: string) => {
	try {
		const notificationStorage = await getNotificationStorage()
		const notificationIds: string[] = notificationStorage[id] ?? []

		for await (const notificationId of notificationIds) {
			await Notifications.cancelScheduledNotificationAsync(notificationId)
		}

		delete notificationStorage[id]

		await setNotificationStorage(notificationStorage)
	} catch {}
}

export const setNotifications = async (
	medicine: TypeMedicine,
	subtitle: string,
) => {
	try {
		const { id, name, notification } = medicine

		if (!notification) {
			return
		}

		const dates = getAllDatesByDaysAndTimes(medicine)
		const notificationsIds = []

		for await (const date of dates) {
			const notificationId = await scheduleNotificationCallback(
				date,
				name,
				subtitle,
			)

			if (notificationId) {
				notificationsIds.push(notificationId)
			}
		}

		const notificationStorage = await getNotificationStorage()
		const updatedNotificationsStorage = {
			...notificationStorage,
			[id]: notificationsIds,
		}

		await setNotificationStorage(updatedNotificationsStorage)
	} catch {}
}

export const updateNotifications = async (
	medicine: TypeMedicine,
	subtitle: string,
) => {
	try {
		const { id } = medicine

		await cancelNotificationsById(id)
		await setNotifications(medicine, subtitle)
	} catch {}
}
