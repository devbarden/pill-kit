import { FC, memo } from 'react'
import { Box } from 'native-base'

import { Logo, PillKit } from '@app/svg'

import { styles } from './Loader.styles'

export const Loader: FC = memo(() => (
	<Box style={styles.wrapper}>
		<Logo />
		<PillKit />
	</Box>
))
