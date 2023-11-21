import Toast, { ToastOptions } from 'react-native-root-toast'

import { EnumColor } from '@app/enums'

const baseConfig: ToastOptions = {
	position: Toast.positions.TOP,
	duration: Toast.durations.SHORT,
	backgroundColor: EnumColor.black,
	textColor: EnumColor.white,
	shadow: false,
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
		}),

	error: (message: string, customConfig?: ToastOptions) =>
		Toast.show(message, {
			...baseConfig,
			...customConfig,
			shadow: true,
			duration: Toast.durations.LONG,
			backgroundColor: EnumColor.red,
		}),
}
