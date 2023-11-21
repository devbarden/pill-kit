import { FC, ReactElement, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './Wrapper.styles'

type TypeProps = {
	children: ReactElement | ReactElement[]
}

export const Wrapper: FC<TypeProps> = memo(({ children }) => (
	<Box style={styles.wrapper}>{children}</Box>
))
