import { LogBox } from 'react-native'

export const registerLogs = () => {
	LogBox.ignoreLogs([
		'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
		`Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.`,
	])
}
