import { FC, ReactElement, memo } from 'react'
import { ScrollView } from 'react-native'
import { Box } from 'native-base'

import { styles } from './ScrollContent.styles'

interface Props {
	children: ReactElement | ReactElement[] | string
}

export const ScrollContent: FC<Props> = memo(({ children }) => (
	<ScrollView>
		<Box style={styles.wrapper}>{children}</Box>
	</ScrollView>
))
