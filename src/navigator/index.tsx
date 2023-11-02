import { FC, memo } from 'react'
import { values } from 'lodash'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import * as PAGE_MAP from '@app/pages'
import { ROUTES, StackTypes } from '@app/types'
import { withSafeArea } from '@app/hoc'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends StackTypes {}
	}
}

const Stack = createNativeStackNavigator<StackTypes>()
const options = { headerShown: false }

export const Navigator: FC = memo(() => (
	<NavigationContainer>
		<Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={options}>
			{values(ROUTES).map((route, index) => (
				<Stack.Screen
					key={index}
					name={route}
					component={withSafeArea(PAGE_MAP[route])}
				/>
			))}
		</Stack.Navigator>
	</NavigationContainer>
))
