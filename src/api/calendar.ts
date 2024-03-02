import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Calendar from 'expo-calendar'
import { map, filter } from 'lodash'

import { EnumStorage } from '@app/enums'
import { TypeMedicine, TypeCalendarStorage } from '@app/types'
import { isNoDeserted, getDateWithTime, getDateFromBeginning } from '@app/utils'
import {
	IS_IOS,
	APP_NAME,
	IS_ANDROID,
	INITIAL_CALENDAR_STORAGE,
} from '@app/constants'

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

export const setCalendarId = async (
	calendarId: string | undefined = undefined,
) => {
	try {
		const data = await getConfiguration()
		const dataWithNewCalendarId = { ...data, calendarId }

		await setConfiguration(dataWithNewCalendarId)
	} catch {}
}

export const removeOldCalendars = async () => {
	try {
		const calendars = await Calendar.getCalendarsAsync(
			Calendar.EntityTypes.EVENT,
		)

		const calendarsWithTheSameName = filter(
			calendars,
			({ title }) => title === APP_NAME,
		)

		if (calendarsWithTheSameName) {
			await Promise.all(
				map(calendarsWithTheSameName, ({ id }) =>
					Calendar.deleteCalendarAsync(id),
				),
			)
		}
	} catch {}
}

export const initCalendar = async () => {
	try {
		await removeOldCalendars()

		const defaultCalendarSource = await getDefaultCalendarSource()

		const calendarId = await Calendar.createCalendarAsync({
			title: APP_NAME,
			name: APP_NAME,
			color: 'red',
			entityType: Calendar.EntityTypes.EVENT,
			source: defaultCalendarSource,
			sourceId: defaultCalendarSource.id,
			isSynced: true,
			isVisible: true,
			allowsModifications: true,
			ownerAccount: 'personal',
			accessLevel: Calendar.CalendarAccessLevel.OWNER,
		})

		await setCalendarId(calendarId)

		return calendarId
	} catch {
		await setCalendarId()

		return undefined
	}
}

export const getCalendarExistingId = async (): Promise<string | undefined> => {
	try {
		const { calendarId } = await getConfiguration()

		const calendars = await Calendar.getCalendarsAsync(
			Calendar.EntityTypes.EVENT,
		)

		const calendar = calendars.find(({ id }) => id === calendarId)

		if (!calendar) {
			await setCalendarId()

			return undefined
		}

		return calendar.id
	} catch {
		return undefined
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

		const calendarId = await getCalendarExistingId()

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

		await Promise.all(
			map(eventsIds, (eventId) =>
				Calendar.deleteEventAsync(eventId, {
					futureEvents: true,
				}),
			),
		)

		delete calendarStorage[id]

		await setCalendarStorage(calendarStorage)
	} catch {}
}

export const setCalendarEvent = async (
	medicine: TypeMedicine,
	subtitle: string,
) => {
	try {
		const { id, name, startDate, endDate, notification, times } = medicine

		const currentDateFromBeginning = getDateFromBeginning()
		const eventStartDate =
			IS_ANDROID && startDate < currentDateFromBeginning
				? currentDateFromBeginning
				: startDate
		const existingCalendarId = await getCalendarExistingId()

		let calendarId = existingCalendarId

		if (!existingCalendarId) {
			calendarId = await initCalendar()
		}

		if (!calendarId || !notification) {
			return
		}

		if (eventStartDate >= endDate) {
			return
		}

		const response = await Promise.all(
			map(times, (time) =>
				Calendar.createEventAsync(calendarId as string, {
					title: `${name} - ${subtitle}`,

					allDay: false,
					availability: Calendar.Availability.FREE,
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

					startDate: getDateWithTime(eventStartDate, time),
					endDate: getDateWithTime(eventStartDate + 3600, time),
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
