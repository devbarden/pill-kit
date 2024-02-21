import * as Calendar from 'expo-calendar'
import { useCallback, useEffect } from 'react'

import { delay } from '@app/utils'
import { initCalendar, getCalendarExistingId } from '@app/api'

export const useDeviceCalendar = (delayMs: number = 0) => {
	const registerForDeviceCalendarAsync = useCallback(async () => {
		await delay(delayMs)

		const { status } = await Calendar.requestCalendarPermissionsAsync()

		if (status === 'granted') {
			const calendarId = await getCalendarExistingId()

			if (!calendarId) {
				await initCalendar()
			}
		}
	}, [delayMs])

	useEffect(() => {
		registerForDeviceCalendarAsync()
	}, [registerForDeviceCalendarAsync])
}
