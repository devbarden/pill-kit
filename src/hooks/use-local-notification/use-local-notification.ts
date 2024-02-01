import * as Notifications from 'expo-notifications'
import { useRef, useState, useEffect } from 'react'

import { registerForPushNotificationsAsync } from '@app/utils'

type TypeLocalNotificationHook = {
	expoPushToken: string | undefined
	notification: Notifications.Notification
}

export const useLocalNotification = (): TypeLocalNotificationHook => {
	const [expoPushToken, setExpoPushToken] = useState<string | undefined>('')
	const [notification, setNotification] = useState(
		{} as Notifications.Notification,
	)
	const notificationListener = useRef<Notifications.Subscription | undefined>()
	const responseListener = useRef<Notifications.Subscription | undefined>()

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) => {
			setExpoPushToken(token)
		})

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification)
			})

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener((response) => {
				setNotification(response.notification)
			})

		return () => {
			if (notificationListener.current?.remove) {
				notificationListener.current.remove()
			}

			if (responseListener.current?.remove) {
				responseListener.current.remove()
			}
		}
	}, [])

	return { expoPushToken, notification }
}
