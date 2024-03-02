import * as Device from 'expo-device'
import { Dimensions, Platform } from 'react-native'

export const DEVICE_TYPE = Device.deviceType

export const DEVICE_DIMENSIONS = Dimensions.get('screen')

export const IS_IOS = Platform.OS === 'ios'

export const IS_ANDROID = Platform.OS === 'android'

export const IS_PHONE = DEVICE_TYPE === Device.DeviceType.PHONE

export const { height: DEVICE_HEIGHT, width: DEVICE_WIDTH } = DEVICE_DIMENSIONS
