import { LogBox } from 'react-native'

export const registerLogs = () => {
	LogBox.ignoreLogs([
		'Sending `onAnimatedValueUpdate` with no listeners registered.',
		'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
	])
}
