import { FC, ReactElement, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './Wrapper.styles'

interface I_Props {
	children: ReactElement | ReactElement[]
}

export const Wrapper: FC<I_Props> = memo(({ children }) => (
	<Box style={styles.wrapper}>{children}</Box>
))
