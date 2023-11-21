import { FC, memo, useContext, useMemo } from 'react'
import { RouteProp } from '@react-navigation/native'
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { Navigation } from '@app/components'
import { NavigatorTabTypes } from '@app/types'
import { GlobalStateContext } from '@app/context'
import { DEFAULT_TAB_ROUTE, TAB_ROUTES } from '@app/constants'

import { Home, History, Settings, Analytic } from './sub-pages'

const Tab = createBottomTabNavigator<NavigatorTabTypes>()

const screenOptions: BottomTabNavigationOptions = {
	headerShown: false,
}

interface TabListeners {
	route: RouteProp<NavigatorTabTypes, TAB_ROUTES>
}

export const Tabs: FC = memo(() => {
	const { setActiveTab } = useContext(GlobalStateContext)

	const commonListenersProps = useMemo(
		() => ({
			listeners: ({ route }: TabListeners) => ({
				state: () => {
					setActiveTab(route.name)
				},
			}),
		}),
		[setActiveTab],
	)

	return (
		<Tab.Navigator
			initialRouteName={DEFAULT_TAB_ROUTE}
			screenOptions={screenOptions}
			tabBar={() => <Navigation />}>
			<Tab.Screen
				name={TAB_ROUTES.HOME}
				component={Home}
				{...commonListenersProps}
			/>
			<Tab.Screen
				name={TAB_ROUTES.ANALYTIC}
				component={Analytic}
				{...commonListenersProps}
			/>
			<Tab.Screen
				name={TAB_ROUTES.HISTORY}
				component={History}
				{...commonListenersProps}
			/>
			<Tab.Screen
				name={TAB_ROUTES.SETTINGS}
				component={Settings}
				{...commonListenersProps}
			/>
		</Tab.Navigator>
	)
})
