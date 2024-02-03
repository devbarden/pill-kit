import * as Localization from 'expo-localization'

import { TypeConfiguration } from '@app/types'

import { PHONE_THEME } from './theme'

export const INITIAL_APP_CONFIGURATION: TypeConfiguration = {
	theme: PHONE_THEME,
	isUserAcceptAppDocs: false,
	language: Localization.locale,
}
