import { FC, ReactElement, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './ContentWrapper.styles'

interface Props {
	children: ReactElement | ReactElement[] | string
}

export const ContentWrapper: FC<Props> = memo(({ children }) => (
	<Box style={styles.wrapper}>{children}</Box>
))
