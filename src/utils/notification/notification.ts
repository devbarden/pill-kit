import * as Notifications from 'expo-notifications'

import { TypeScheduleNotification } from '@app/types'

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
