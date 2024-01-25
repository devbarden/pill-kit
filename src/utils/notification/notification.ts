import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

import { TypeNotification } from '@app/types'
import { EnumColor } from '@app/enums'

export const schedulePushNotification = async ({
	time,
	title,
	subtitle,
	body,
}: TypeNotification) => {
	await Notifications.scheduleNotificationAsync({
		content: {
			title,
			subtitle,
			body,
		},
		trigger: {
			seconds: time,
		},
	})
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

	token = (await Notifications.getExpoPushTokenAsync()).data

	return token
}
