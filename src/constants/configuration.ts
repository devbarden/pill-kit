import { TypeConfiguration } from '@app/types'

import { PHONE_THEME } from './theme'
import { FALLBACK_LANGUAGE_CODE } from './language'

export const INITIAL_APP_CONFIGURATION: TypeConfiguration = {
	theme: PHONE_THEME,
	isUserAcceptAppDocs: false,
	language: FALLBACK_LANGUAGE_CODE,
}
