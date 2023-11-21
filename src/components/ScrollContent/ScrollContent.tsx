import { FC, ReactElement, memo } from 'react'
import { ScrollView } from 'react-native'
import { Box } from 'native-base'

import { styles } from './ScrollContent.styles'

type TypeProps = {
	children: ReactElement | ReactElement[] | string
}

export const ScrollContent: FC<TypeProps> = memo(({ children }) => (
	<ScrollView>
		<Box style={styles.wrapper}>{children}</Box>
	</ScrollView>
))
