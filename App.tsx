import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import * as Notifications from 'expo-notifications'
import Application from 'react-native-restart'
import { FC, memo } from 'react'
import { registerRootComponent } from 'expo'
import { NativeBaseProvider } from 'native-base'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Platform, UIManager, I18nManager } from 'react-native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@app/i18n'
import { registerLogs } from '@app/utils'
import { Initialization } from '@app/initialization'

registerLogs()
SplashScreen.preventAutoHideAsync()

I18nManager.forceRTL(false)
I18nManager.allowRTL(false)

if (I18nManager.isRTL) {
	Application.restart()
}

if (Platform.OS === 'android') {
	UIManager.setLayoutAnimationEnabledExperimental &&
		UIManager.setLayoutAnimationEnabledExperimental(true)
}

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

registerRootComponent(App)

export default App
