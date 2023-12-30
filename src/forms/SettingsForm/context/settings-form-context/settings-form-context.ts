import { createContext } from 'react'

import { FALLBACK_LANGUAGE_LABEL } from '@app/constants'
import { TypeSettingsFormContextProps } from '@app/types'

export const SettingsFormContext = createContext<TypeSettingsFormContextProps>({
	removeAlertRef: null,
	modalLanguageRef: null,

	selectedLanguage: FALLBACK_LANGUAGE_LABEL,

	changeLanguageHandler: () => {},

	mailHandler: () => {},
	termsOfUseHandler: () => {},

	openLanguageModal: () => {},
	closeLanguageModal: () => {},

	openRemoveDataModal: () => {},
})
