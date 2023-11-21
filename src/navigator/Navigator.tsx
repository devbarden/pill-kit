import { FC, memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'

import '@app/i18n'
import { Loader } from '@app/components'
import { GlobalStateContext } from '@app/context'
import { useEndpoints, useGlobalState } from '@app/hooks'
import { Tabs, CreateMedicine, EditMedicine } from '@app/pages'
import { T_NavigatorTypes, T_NavigatorStackTypes } from '@app/types'
import { DEFAULT_STACK_ROUTE, STACK_ROUTES } from '@app/constants'

import { styles } from './Navigator.styles'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends T_NavigatorTypes {}
	}
}

const Stack = createStackNavigator<T_NavigatorStackTypes>()

const screenOptions: StackNavigationOptions = {
	headerShown: false,
	cardStyle: styles.wrapper,
}

export const Navigator: FC = memo(() => {
	const { useInitMedicines } = useEndpoints()
	const { isLoading } = useInitMedicines()

	const globalState = useGlobalState()

	if (isLoading) {
		return <Loader />
	}

	return (
		<GlobalStateContext.Provider value={globalState}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={DEFAULT_STACK_ROUTE}
					screenOptions={screenOptions}>
					<Stack.Screen name={STACK_ROUTES.TABS} component={Tabs} />
					<Stack.Screen
						name={STACK_ROUTES.CREATE_MEDICINE}
						component={CreateMedicine}
					/>
					<Stack.Screen
						name={STACK_ROUTES.EDIT_MEDICINE}
						component={EditMedicine}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</GlobalStateContext.Provider>
	)
})
