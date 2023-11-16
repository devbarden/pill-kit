import { FC, ReactElement, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './BgWrapper.styles'

interface Props {
	children: ReactElement | ReactElement[] | string
}

export const BgWrapper: FC<Props> = memo(({ children }) => (
	<Box style={styles.wrapper}>{children}</Box>
))
