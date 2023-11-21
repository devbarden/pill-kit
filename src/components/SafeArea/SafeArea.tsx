import { FC, ReactElement, memo } from 'react'
import { SafeAreaView } from 'react-native'

import { styles } from './SafeArea.styles'

type TypeProps = {
	children: ReactElement
}

export const SafeArea: FC<TypeProps> = memo(({ children }) => (
	<SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
))
