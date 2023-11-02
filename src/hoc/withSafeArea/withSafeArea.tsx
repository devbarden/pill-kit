import { ComponentType } from 'react'
import { SafeAreaView } from 'react-native'

export const withSafeArea = (Child: ComponentType) => () => (
	<SafeAreaView>
		<Child />
	</SafeAreaView>
)
