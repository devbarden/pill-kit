import * as SplashScreen from 'expo-splash-screen'
import { FC, useMemo, useCallback } from 'react'
import { Animated } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'

import { useGlobalState } from '@app/hooks'
import { withErrorBoundary } from '@app/hocs'
import { GlobalStateContext } from '@app/context'
import { DEFAULT_STACK_ROUTE } from '@app/constants'
import { EnumStackRoute, EnumTheme } from '@app/enums'
import { TypeNavigatorStack, TypeNavigatorScreen } from '@app/types'
import { Tabs, CreateMedicine, EditMedicine, Welcome } from '@app/pages'

import { styles } from './Navigator.styles'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends TypeNavigatorScreen {}
	}
}

const Stack = createStackNavigator<TypeNavigatorStack>()

const screenOptions: StackNavigationOptions = {
	headerShown: false,
	cardStyle: styles.wrapper,
}

export const Navigator: FC = withErrorBoundary(() => {
	const globalState = useGlobalState()
	const opacity = useMemo(() => new Animated.Value(0), [])

	const {
		theme,
		globalStyleProps,
		isUserAcceptAppDocs,
		isConfigurationLoading,
		isMedicineActionEnabled,
	} = useMemo(() => globalState, [globalState])

	const defaultRoute = useMemo(
		() => (isUserAcceptAppDocs ? DEFAULT_STACK_ROUTE : EnumStackRoute.welcome),
		[isUserAcceptAppDocs],
	)

	const modalOptions: StackNavigationOptions = useMemo(
		() => ({
			presentation: 'modal',
			cardStyle: styles.modal,
			gestureEnabled: isMedicineActionEnabled,
		}),
		[isMedicineActionEnabled],
	)

	const hideSplashScreen = useCallback(async () => {
		if (!isConfigurationLoading) {
			await SplashScreen.hideAsync()

			Animated.timing(opacity, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true,
			}).start()
		}
	}, [isConfigurationLoading, opacity])

	if (isConfigurationLoading) {
		return null
	}

	return (
		<Animated.View style={{ flex: 1, opacity }} onLayout={hideSplashScreen}>
			<GlobalStateContext.Provider value={globalState}>
				<StatusBar
					translucent={false}
					style={theme === EnumTheme.dark ? 'light' : 'dark'}
					backgroundColor={globalStyleProps.style.color.primary}
				/>

				<NavigationContainer>
					<Stack.Navigator
						initialRouteName={defaultRoute}
						screenOptions={screenOptions}>
						<Stack.Screen name={EnumStackRoute.welcome} component={Welcome} />
						<Stack.Screen name={EnumStackRoute.tabs} component={Tabs} />
						<Stack.Screen
							options={modalOptions}
							name={EnumStackRoute.createMedicine}
							component={CreateMedicine}
						/>
						<Stack.Screen
							options={modalOptions}
							name={EnumStackRoute.editMedicine}
							component={EditMedicine}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</GlobalStateContext.Provider>
		</Animated.View>
	)
})
