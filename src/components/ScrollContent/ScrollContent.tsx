import { FC, ReactElement, memo } from 'react'
import { ScrollView } from 'react-native'
import { Box } from 'native-base'

import { styles } from './ScrollContent.styles'

interface I_Props {
	children: ReactElement | ReactElement[] | string
}

export const ScrollContent: FC<I_Props> = memo(({ children }) => (
	<ScrollView>
		<Box style={styles.wrapper}>{children}</Box>
	</ScrollView>
))
