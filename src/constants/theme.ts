import { Appearance } from 'react-native'

import { EnumTheme } from '@app/enums'

export const PHONE_THEME =
	(Appearance.getColorScheme() as EnumTheme) || EnumTheme.light
