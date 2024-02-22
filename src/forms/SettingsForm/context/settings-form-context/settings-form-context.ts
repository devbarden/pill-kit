import { createContext } from 'react'

import { FALLBACK_LANGUAGE_LABEL } from '@app/constants'
import { TypeSettingsFormContextProps } from '@app/types'

export const SettingsFormContext = createContext<TypeSettingsFormContextProps>({
	modalRemoveRef: null,
	modalLanguageRef: null,

	selectedLanguage: FALLBACK_LANGUAGE_LABEL,

	isShareBtnAvailable: false,

	mailHandler: () => {},
	shareDataHandler: () => {},
	termsOfUseHandler: () => {},
	changeThemeHandler: () => {},
	changeLanguageHandler: () => {},

	openRemoveModal: () => {},
	closeRemoveModal: () => {},

	openLanguageModal: () => {},
	closeLanguageModal: () => {},
})
