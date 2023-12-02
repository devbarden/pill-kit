import { createContext } from 'react'

import { FALLBACK_LANGUAGE_LABEL } from '@app/constants'
import { TypeSettingsFormContextProps } from '@app/typess'

export const SettingsFormContext = createContext<TypeSettingsFormContextProps>({
	termsOfUseRef: null,
	removeAlertRef: null,
	modalLanguageRef: null,

	selectedLanguage: FALLBACK_LANGUAGE_LABEL,

	changeLanguageHandler: () => {},

	upgradeHandler: () => {},
	mailHandler: () => {},
	donateHandler: () => {},
	rateHandler: () => {},

	openLanguageModal: () => {},
	closeLanguageModal: () => {},

	openRemoveDataModal: () => {},
	openTermsOfUseModal: () => {},
})
