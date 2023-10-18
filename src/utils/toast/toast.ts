import Toast, { ToastOptions } from 'react-native-root-toast'

import { colors } from '@app/constants'

const baseConfig: ToastOptions = {
	position: Toast.positions.TOP,
	duration: Toast.durations.SHORT,
	backgroundColor: colors.black,
	textColor: colors.white,
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
			backgroundColor: colors.green,
		}),

	error: (message: string, customConfig?: ToastOptions) =>
		Toast.show(message, {
			...baseConfig,
			...customConfig,
			shadow: true,
			duration: Toast.durations.LONG,
			backgroundColor: colors.red,
		}),
}
