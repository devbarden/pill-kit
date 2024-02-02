import * as Notifications from 'expo-notifications'
import { useCallback, useEffect } from 'react'

import { delay } from '@app/utils'

export const useLocalNotification = (delayMs: number = 0) => {
	const registerForPushNotificationsAsync = useCallback(async () => {
		await delay(delayMs)

		const { status: existingStatus } = await Notifications.getPermissionsAsync()

		if (existingStatus !== 'granted') {
			await Notifications.requestPermissionsAsync()
		}
	}, [delayMs])

	useEffect(() => {
		registerForPushNotificationsAsync()
	}, [registerForPushNotificationsAsync])
}
