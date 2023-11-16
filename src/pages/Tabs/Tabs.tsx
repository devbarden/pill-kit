import { FC, memo } from 'react'
import {
	BottomTabBarProps,
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import { TAB_ROUTES } from '@app/constants'
import { NavigatorTabTypes } from '@app/types'
import { Navigation } from '@app/components'

import { Home, History, Settings } from './sub-pages'

const Tab = createBottomTabNavigator<NavigatorTabTypes>()

const screenOptions: BottomTabNavigationOptions = {
	headerShown: false,
}

export const Tabs: FC = memo(() => (
	<Tab.Navigator
		initialRouteName={TAB_ROUTES.HOME}
		screenOptions={screenOptions}
		tabBar={(barProps: BottomTabBarProps) => <Navigation {...barProps} />}>
		<Tab.Screen name={TAB_ROUTES.HOME} component={Home} />
		<Tab.Screen name={TAB_ROUTES.HISTORY} component={History} />
		<Tab.Screen name={TAB_ROUTES.SETTINGS} component={Settings} />
	</Tab.Navigator>
))
