import { FC, ReactElement, memo } from 'react'
import { SafeAreaView } from 'react-native'

import { styles } from './SafeArea.styles'

interface Props {
	children: ReactElement
}

export const SafeArea: FC<Props> = memo(({ children }) => (
	<SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
))
