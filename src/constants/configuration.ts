import { EnumTheme } from '@app/enums'
import { TypeConfiguration } from '@app/types'

import { FALLBACK_LANGUAGE_CODE } from './language'

export const INITIAL_APP_CONFIGURATION: TypeConfiguration = {
	theme: EnumTheme.light,
	isUserAcceptAppDocs: false,
	language: FALLBACK_LANGUAGE_CODE,
}
