import Toast, { ToastOptions } from 'react-native-root-toast'
import { Platform } from 'react-native'

import { EnumColor } from '@app/enums'

const baseConfig: ToastOptions = {
	position:
		Platform.OS === 'android' ? Toast.positions.CENTER : Toast.positions.TOP,
	duration: Toast.durations.SHORT,
	backgroundColor: EnumColor.black,
	textColor: EnumColor.white,
	shadow: true,
	animation: true,
	hideOnPress: true,
	opacity: 1,
}

export const toast = {
	success: (message: string, customConfig?: ToastOptions) =>
		Toast.show(message, {
			...baseConfig,
			...customConfig,
			backgroundColor: EnumColor.green,
			shadowColor: EnumColor.green,
		}),

	error: (message: string, customConfig?: ToastOptions) =>
		Toast.show(message, {
			...baseConfig,
			...customConfig,
			shadow: true,
			duration: Toast.durations.LONG,
			backgroundColor: EnumColor.red,
			shadowColor: EnumColor.red,
		}),
}
