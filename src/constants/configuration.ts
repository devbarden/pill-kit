import * as Localization from 'expo-localization'

import { TypeConfiguration } from '@app/types'

import { PHONE_THEME } from './theme'
import { ARABIC_NUMBER_CODE } from './language'

const getLocale = () => {
	if (Localization.locale.includes('ar')) {
		return ARABIC_NUMBER_CODE
	}

	return Localization.locale
}

export const INITIAL_APP_CONFIGURATION: TypeConfiguration = {
	theme: PHONE_THEME,
	isUserAcceptAppDocs: false,
	language: getLocale(),
}
