import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Calendar from 'expo-calendar'
import { map, filter } from 'lodash'

import { EnumColor, EnumStorage } from '@app/enums'
import { isNoDeserted, getDateWithTime } from '@app/utils'
import { TypeMedicine, TypeCalendarStorage } from '@app/types'
import { INITIAL_CALENDAR_STORAGE, IS_IOS, APP_NAME } from '@app/constants'

import { getConfiguration, setConfiguration } from './configuration'

const getDefaultCalendarSource = async () => {
	if (IS_IOS) {
		const defaultCalendar = await Calendar.getDefaultCalendarAsync()

		return defaultCalendar.source
	}

	return {
		isLocalAccount: true,
		name: APP_NAME,
	} as Calendar.Source
}

export const initCalendar = async () => {
	try {
		const defaultCalendarSource = await getDefaultCalendarSource()

		const calendarId = await Calendar.createCalendarAsync({
			title: APP_NAME,
			name: APP_NAME,
			color: EnumColor.red,
			entityType: Calendar.EntityTypes.EVENT,
			source: defaultCalendarSource,
			sourceId: defaultCalendarSource.id,
			allowsModifications: true,
			ownerAccount: 'personal',
			accessLevel: Calendar.CalendarAccessLevel.OWNER,
		})

		const data = await getConfiguration()
		const dataWithNewCalendarId = { ...data, calendarId }

		await setConfiguration(dataWithNewCalendarId)

		return calendarId
	} catch {
		return undefined
	}
}

export const getIsCalendarAlreadyExist = async () => {
	try {
		const { calendarId } = await getConfiguration()

		const calendars = await Calendar.getCalendarsAsync(
			Calendar.EntityTypes.EVENT,
		)

		const calendar = calendars.find(({ id }) => id === calendarId)

		return Boolean(calendar)
	} catch {
		return false
	}
}

const getCalendarStorage = async () => {
	try {
		const data = await AsyncStorage.getItem(EnumStorage.calendar)
		const calendarStorage: TypeCalendarStorage = data
			? JSON.parse(data)
			: INITIAL_CALENDAR_STORAGE

		return calendarStorage
	} catch {
		return INITIAL_CALENDAR_STORAGE
	}
}

const setCalendarStorage = async (data: TypeCalendarStorage) => {
	try {
		const stringifiedData = JSON.stringify(data)

		await AsyncStorage.setItem(EnumStorage.calendar, stringifiedData)
	} catch {}
}

export const cancelAllCalendarEvents = async () => {
	try {
		await setCalendarStorage(INITIAL_CALENDAR_STORAGE)

		const { calendarId } = await getConfiguration()

		if (calendarId) {
			await Calendar.deleteCalendarAsync(calendarId)
		}

		await initCalendar()
	} catch {}
}

export const cancelCalendarEvent = async (id: string) => {
	try {
		const calendarStorage = await getCalendarStorage()
		const eventsIds: string[] = calendarStorage[id] ?? []

		delete calendarStorage[id]

		await setCalendarStorage(calendarStorage)

		await Promise.all(
			map(eventsIds, (eventId) =>
				Calendar.deleteEventAsync(eventId, {
					futureEvents: true,
				}),
			),
		)
	} catch {}
}

export const setCalendarEvent = async (
	medicine: TypeMedicine,
	subtitle: string,
) => {
	try {
		const { calendarId } = await getConfiguration()
		const { id, name, startDate, endDate, notification, times } = medicine

		let newCalendarId = calendarId

		if (!calendarId) {
			newCalendarId = await initCalendar()
		}

		if (!newCalendarId || !notification) {
			return
		}

		const finalCalendarId: string = calendarId ?? newCalendarId
		const response = await Promise.all(
			map(times, (time) =>
				Calendar.createEventAsync(finalCalendarId, {
					title: `${name} - ${subtitle}`,

					allDay: false,
					alarms: [
						{
							relativeOffset: 0,
							method: Calendar.AlarmMethod.ALERT,
						},
					],

					recurrenceRule: {
						frequency: Calendar.Frequency.DAILY,
						endDate: new Date(endDate),
					},

					startDate: getDateWithTime(startDate, time),
					endDate: getDateWithTime(startDate + 3600, time),
				}),
			),
		)

		const calendarStorage = await getCalendarStorage()
		const eventsIds = filter(response, (value) => isNoDeserted(value))
		const updatedCalendarStorage = {
			...calendarStorage,
			[id]: eventsIds,
		}

		await setCalendarStorage(updatedCalendarStorage)
	} catch {}
}

export const updateCalendarEvent = async (
	medicine: TypeMedicine,
	subtitle: string,
) => {
	try {
		const { id } = medicine

		await cancelCalendarEvent(id)
		await setCalendarEvent(medicine, subtitle)
	} catch {}
}
