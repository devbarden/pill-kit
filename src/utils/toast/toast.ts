import Toast, { ToastOptions } from 'react-native-root-toast'

import { COLORS } from '@app/constants'

const baseConfig: ToastOptions = {
	position: Toast.positions.TOP,
	duration: Toast.durations.SHORT,
	backgroundColor: COLORS.BLACK,
	textColor: COLORS.WHITE,
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
			backgroundColor: COLORS.GREEN,
		}),

	error: (message: string, customConfig?: ToastOptions) =>
		Toast.show(message, {
			...baseConfig,
			...customConfig,
			shadow: true,
			duration: Toast.durations.LONG,
			backgroundColor: COLORS.RED,
		}),
}
