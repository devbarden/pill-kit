import { FC, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavigationContainer } from '@react-navigation/native'
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack'

import { Loader } from '@app/components'
import { useGlobalState } from '@app/hooks'
import { EnumStackRoute } from '@app/enums'
import { withErrorBoundary } from '@app/hocs'
import { GlobalStateContext } from '@app/context'
import { DEFAULT_STACK_ROUTE } from '@app/constants'
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

const modalOptions: StackNavigationOptions = {
	presentation: 'modal',
	cardStyle: styles.modal,
}

export const Navigator: FC = withErrorBoundary(() => {
	const globalState = useGlobalState()

	const { i18n } = useTranslation()
	const { isUserAcceptAppDocs, isConfigurationLoading, language } = useMemo(
		() => globalState,
		[globalState],
	)

	const defaultRoute = useMemo(
		() => (isUserAcceptAppDocs ? DEFAULT_STACK_ROUTE : EnumStackRoute.welcome),
		[isUserAcceptAppDocs],
	)

	useEffect(() => {
		i18n.changeLanguage(language)
	}, [i18n, language])

	if (isConfigurationLoading) {
		return <Loader />
	}

	return (
		<GlobalStateContext.Provider value={globalState}>
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
	)
})
