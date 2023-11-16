import { FC, memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'

import '@app/i18n'
import { Loader } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { STACK_ROUTES } from '@app/constants'
import { Tabs, CreateMedicine, EditMedicine } from '@app/pages'
import { NavigatorTypes, NavigatorStackTypes } from '@app/types'

import { styles } from './Navigator.styles'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends NavigatorTypes {}
	}
}

const Stack = createStackNavigator<NavigatorStackTypes>()

const screenOptions: StackNavigationOptions = {
	headerShown: false,
	cardStyle: styles.wrapper,
}

export const Navigator: FC = memo(() => {
	const { useInitMedicines } = useEndpoints()
	const { isLoading } = useInitMedicines()

	if (isLoading) {
		return <Loader />
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={STACK_ROUTES.TABS}
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
	)
})
