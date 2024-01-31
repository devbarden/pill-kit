import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'
import { Platform } from 'react-native'

import { EnumColor } from '@app/enums'
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

export const registerForPushNotificationsAsync = async () => {
	let token: string = ''

	if (Platform.OS === 'android') {
		await Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: EnumColor.white,
		})
	}

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
