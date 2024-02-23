import { EnumLightThemeColor, EnumDarkThemeColor } from '@app/enums'

export type TypeLightThemeStyle = {
	color: {
		theme: EnumLightThemeColor
		main: EnumLightThemeColor
		primary: EnumLightThemeColor
		invert: EnumLightThemeColor
		secondary: EnumLightThemeColor
		tertiary: EnumLightThemeColor
		highlight: EnumLightThemeColor
		transparent: EnumLightThemeColor
		remove: EnumLightThemeColor
	}
}

export type TypeDarkThemeStyle = {
	color: {
		theme: EnumDarkThemeColor
		main: EnumDarkThemeColor
		primary: EnumDarkThemeColor
		invert: EnumDarkThemeColor
		secondary: EnumDarkThemeColor
		tertiary: EnumDarkThemeColor
		highlight: EnumDarkThemeColor
		transparent: EnumDarkThemeColor
		remove: EnumDarkThemeColor
	}
}

export type TypeThemeStyle = TypeLightThemeStyle | TypeDarkThemeStyle
