import { Platform, StatusBar } from 'react-native'

const SAFE_HEIGHT = 16

export const IS_IOS = Platform.OS === 'ios'

export const IS_ANDROID = Platform.OS === 'android'

export const SAFE_ANDROID_BAR_HEIGHT = StatusBar.currentHeight
	? StatusBar.currentHeight + SAFE_HEIGHT
	: SAFE_HEIGHT
