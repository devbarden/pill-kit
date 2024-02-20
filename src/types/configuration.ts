import { EnumTheme } from '@app/enums'

export type TypeConfiguration = {
	theme: EnumTheme
	calendarId: string | undefined
	isUserAcceptAppDocs: boolean
}
