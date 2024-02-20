import { FC, memo } from 'react'
import { Box } from 'native-base'

import { Spinner as BaseSpinner } from '@app/components'

import { styles } from './Spinner.styles'

export const Spinner: FC = memo(() => (
	<Box style={styles.wrapper}>
		<BaseSpinner size={20} />
	</Box>
))
