import { FC, memo } from 'react'
import { values } from 'lodash'
import { NavigationContainer } from '@react-navigation/native'
import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import '@app/i18n'
import * as PAGE_MAP from '@app/pages'
import { useEndpoints } from '@app/hooks'
import { ROUTES } from '@app/constants'
import { NavigatorTypes } from '@app/types'
import { withContentWrapper } from '@app/hoc'
import { Loader, Navigation } from '@app/components'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends NavigatorTypes {}
	}
}

const screenOptions = { headerShown: false }
const Tab = createBottomTabNavigator<NavigatorTypes>()

// TODO: remove caching of page

export const Screen: FC = memo(() => {
	const { useInitMedicines } = useEndpoints()
	const { isLoading } = useInitMedicines()

	if (isLoading) {
		return <Loader />
	}

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={ROUTES.HOME}
				screenOptions={screenOptions}
				tabBar={({ state }: BottomTabBarProps) => (
					<Navigation stateIndex={state.index} />
				)}>
				{values(ROUTES).map((route, index) => (
					<Tab.Screen
						key={index}
						name={route}
						component={withContentWrapper(PAGE_MAP[route])}
					/>
				))}
			</Tab.Navigator>
		</NavigationContainer>
	)
})
