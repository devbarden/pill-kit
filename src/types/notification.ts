import { SchedulableNotificationTriggerInput } from 'expo-notifications'

export type TypeNotificationStorage = Record<string, string[]>

export type TypeScheduleNotification = {
	title: string
	subtitle?: string
	body?: string
	trigger: SchedulableNotificationTriggerInput
}
