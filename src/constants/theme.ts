import { Appearance } from 'react-native'

import { TypeLightThemeStyle, TypeDarkThemeStyle } from '@app/types'
import { EnumLightThemeColor, EnumDarkThemeColor, EnumTheme } from '@app/enums'

export const PHONE_THEME =
	(Appearance.getColorScheme() as EnumTheme) || EnumTheme.light

export const LIGHT_THEME: TypeLightThemeStyle = {
	color: {
		theme: EnumLightThemeColor.yellow,
		main: EnumLightThemeColor.red,
		primary: EnumLightThemeColor.white,
		invert: EnumLightThemeColor.black,
		secondary: EnumLightThemeColor.grey,
		tertiary: EnumLightThemeColor.lightGrey,
		highlight: EnumLightThemeColor.darkGrey,
		transparent: EnumLightThemeColor.transparentGrey,
		remove: EnumLightThemeColor.red,
	},
}

export const DARK_THEME: TypeDarkThemeStyle = {
	color: {
		theme: EnumDarkThemeColor.blue,
		main: EnumDarkThemeColor.blue,
		primary: EnumDarkThemeColor.lightBlack,
		invert: EnumDarkThemeColor.lightGrey,
		secondary: EnumDarkThemeColor.black,
		tertiary: EnumDarkThemeColor.darkGrey,
		highlight: EnumDarkThemeColor.grey,
		transparent: EnumDarkThemeColor.transparentGrey,
		remove: EnumDarkThemeColor.red,
	},
}
