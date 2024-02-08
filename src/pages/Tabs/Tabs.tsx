import { FC, memo, useMemo } from 'react'
import { RouteProp } from '@react-navigation/native'
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { EnumTabRoute } from '@app/enums'
import { TypeNavigatorTab } from '@app/types'
import { useGlobalContext } from '@app/hooks'
import { DEFAULT_TAB_ROUTE } from '@app/constants'
import { Navigation, SafeArea } from '@app/components'

import { Home, History, Settings, Analytic } from './sub-pages'

const Tab = createBottomTabNavigator<TypeNavigatorTab>()

const screenOptions: BottomTabNavigationOptions = {
	headerShown: false,
}

type TypeTabListeners = {
	route: RouteProp<TypeNavigatorTab, EnumTabRoute>
}

export const Tabs: FC = memo(() => {
	const { setActiveTab } = useGlobalContext()

	const commonListenersProps = useMemo(
		() => ({
			listeners: ({ route }: TypeTabListeners) => ({
				state: () => {
					setActiveTab(route.name)
				},
			}),
		}),
		[setActiveTab],
	)

	return (
		<SafeArea>
			<Tab.Navigator
				initialRouteName={DEFAULT_TAB_ROUTE}
				screenOptions={screenOptions}
				tabBar={() => <Navigation />}>
				<Tab.Screen
					name={EnumTabRoute.home}
					component={Home}
					{...commonListenersProps}
				/>

				<Tab.Screen
					name={EnumTabRoute.analytic}
					component={Analytic}
					{...commonListenersProps}
				/>

				<Tab.Screen
					name={EnumTabRoute.history}
					component={History}
					{...commonListenersProps}
				/>

				<Tab.Screen
					name={EnumTabRoute.settings}
					component={Settings}
					{...commonListenersProps}
				/>
			</Tab.Navigator>
		</SafeArea>
	)
})
