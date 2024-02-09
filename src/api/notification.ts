import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'
import { map, filter } from 'lodash'

import { EnumStorage } from '@app/enums'
import { INITIAL_NOTIFICATION_STORAGE } from '@app/constants'
import { TypeMedicine, TypeNotificationStorage } from '@app/types'
import {
	isNoDeserted,
	getDatesToNotify,
	scheduleNotificationCallback,
} from '@app/utils'

export const initNotificationChannel = async () => {
	try {
		if (Platform.OS === 'android') {
			await Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FFFFFF',
				showBadge: false,
			})
		}

		return true
	} catch {
		return false
	}
}

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

		delete notificationStorage[id]

		await setNotificationStorage(notificationStorage)

		await Promise.all(
			map(notificationIds, (notificationId) =>
				Notifications.cancelScheduledNotificationAsync(notificationId),
			),
		)
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

		const notificationStorage = await getNotificationStorage()
		const dates = getDatesToNotify(medicine)

		const response = await Promise.all(
			map(dates, (date) => scheduleNotificationCallback(date, name, subtitle)),
		)

		const notificationsIds = filter(response, (value) =>
			isNoDeserted(value),
		) as string[]

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
