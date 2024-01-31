import 'react-native-gesture-handler'
import * as Notifications from 'expo-notifications'
import * as SplashScreen from 'expo-splash-screen'
import { FC, memo } from 'react'
import { NativeBaseProvider } from 'native-base'
import { Platform, UIManager } from 'react-native'
import { RootSiblingParent } from 'react-native-root-siblings'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@app/i18n'
import { registerLogs } from '@app/utils'
import { Initialization } from '@app/initialization'

SplashScreen.preventAutoHideAsync()

if (Platform.OS === 'android') {
	UIManager.setLayoutAnimationEnabledExperimental &&
		UIManager.setLayoutAnimationEnabledExperimental(true)
}

registerLogs()

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
})

const queryClient = new QueryClient()

const App: FC = memo(() => (
	<QueryClientProvider client={queryClient}>
		<NativeBaseProvider>
			<RootSiblingParent>
				<Initialization />
			</RootSiblingParent>
		</NativeBaseProvider>
	</QueryClientProvider>
))

export default App
