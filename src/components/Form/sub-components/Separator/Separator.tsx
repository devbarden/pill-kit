import { FC, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './Separator.styles'

export const Separator: FC = memo(() => <Box style={styles.separator} />)
