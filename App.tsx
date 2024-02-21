import 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import Application from 'react-native-restart'
import { FC, memo } from 'react'
import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import { NativeBaseProvider } from 'native-base'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Platform, UIManager, I18nManager } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@app/i18n'
import { IS_IOS } from '@app/constants'
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

const queryClient = new QueryClient()

const App: FC = memo(() => (
	<QueryClientProvider client={queryClient}>
		<SafeAreaProvider>
			<NativeBaseProvider>
				<RootSiblingParent>
					<StatusBar translucent={false} style={IS_IOS ? 'auto' : 'light'} />
					<Initialization />
				</RootSiblingParent>
			</NativeBaseProvider>
		</SafeAreaProvider>
	</QueryClientProvider>
))

registerRootComponent(App)

export default App
