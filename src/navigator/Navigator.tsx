import { FC, memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'

import '@app/i18n'
import { Loader } from '@app/components'
import { EnumStackRoute } from '@app/enums'
import { GlobalStateContext } from '@app/context'
import { DEFAULT_STACK_ROUTE } from '@app/constants'
import { useEndpoints, useGlobalState } from '@app/hooks'
import { Tabs, CreateMedicine, EditMedicine } from '@app/pages'
import { TypeNavigatorScreen, TypeNavigatorStack } from '@app/typess'

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
					<Stack.Screen name={EnumStackRoute.tabs} component={Tabs} />

					<Stack.Screen
						name={EnumStackRoute.createMedicine}
						component={CreateMedicine}
					/>

					<Stack.Screen
						name={EnumStackRoute.editMedicine}
						component={EditMedicine}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</GlobalStateContext.Provider>
	)
})
