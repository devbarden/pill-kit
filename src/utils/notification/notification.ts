import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

import { TypeScheduleNotification } from '@app/types'

import { delay } from '../delay'

export const schedulePushNotification = async ({
	title,
	subtitle,
	body,
	trigger,
}: TypeScheduleNotification) =>
	await Notifications.scheduleNotificationAsync({
		content: {
			title,
			subtitle,
			body,
		},
		trigger,
	})

export const scheduleNotificationCallback = async (
	date: Date,
	title: string,
	subtitle: string,
) => {
	const isAvailableToScheduleNotification = date.getTime() >= Date.now()

	if (!isAvailableToScheduleNotification) {
		return null
	}

	const notificationId = await schedulePushNotification({
		title,
		subtitle,
		trigger: {
			date,
		},
	})

	return notificationId
}

export const registerForPushNotificationsAsync = async () => {
	let token: string = ''

	await delay(1000)

	const { status: existingStatus } = await Notifications.getPermissionsAsync()

	let finalStatus = existingStatus

	if (existingStatus !== 'granted') {
		const { status } = await Notifications.requestPermissionsAsync()

		finalStatus = status
	}

	if (finalStatus !== 'granted') {
		return
	}

	token = (
		await Notifications.getExpoPushTokenAsync({
			projectId: Constants?.expoConfig?.extra?.eas.projectId,
		})
	).data

	return token
}
