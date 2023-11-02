import { ComponentType } from 'react'
import { SafeAreaView } from 'react-native'

import { ScreenWrapper } from '@app/components'

import { styles } from './styles'

export const withSafeArea = (Child: ComponentType) => () => (
	<SafeAreaView style={styles.wrapper}>
		<ScreenWrapper>
			<Child />
		</ScreenWrapper>
	</SafeAreaView>
)
