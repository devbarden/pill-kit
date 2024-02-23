import { EnumTheme } from '@app/enums'

import { TypeThemeStyle } from './theme'

export type TypeGlobalStyleProps = {
	theme: EnumTheme
	style: TypeThemeStyle
	isLocaleRTL: boolean
}
