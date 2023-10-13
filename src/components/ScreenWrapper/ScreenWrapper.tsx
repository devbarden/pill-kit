import { FC, ReactElement, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './ScreenWrapper.styles'

interface Props {
	children: ReactElement
}

export const ScreenWrapper: FC<Props> = memo(({ children }) => (
	<Box style={styles.wrapper}>{children}</Box>
))
