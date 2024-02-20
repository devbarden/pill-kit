import * as Calendar from 'expo-calendar'
import { useCallback, useEffect } from 'react'

import { delay } from '@app/utils'
import { initCalendar, getIsCalendarAlreadyExist } from '@app/api'

export const useDeviceCalendar = (delayMs: number = 0) => {
	const registerForDeviceCalendarAsync = useCallback(async () => {
		await delay(delayMs)

		const { status } = await Calendar.requestCalendarPermissionsAsync()

		if (status === 'granted') {
			const isCalendarAlreadyExist = await getIsCalendarAlreadyExist()

			if (!isCalendarAlreadyExist) {
				await initCalendar()
			}
		}
	}, [delayMs])

	useEffect(() => {
		registerForDeviceCalendarAsync()
	}, [registerForDeviceCalendarAsync])
}
