import { Dimensions, Platform } from 'react-native'

export const IS_IOS = Platform.OS === 'ios'

export const IS_ANDROID = Platform.OS === 'android'

export const DEVICE_DIMENSIONS = Dimensions.get('screen')

export const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = DEVICE_DIMENSIONS
