import { FC, memo } from 'react'
import { Box, Skeleton } from 'native-base'

import { styles } from './Loading.styles'
import { EnumColor } from '@app/enums'

export const Loading: FC = memo(() => (
	<Box style={styles.wrapper}>
		<Skeleton
			h={100}
			borderRadius={12}
			startColor={EnumColor.white}
			endColor={EnumColor.grey}
		/>
		<Skeleton
			h={100}
			borderRadius={12}
			startColor={EnumColor.white}
			endColor={EnumColor.grey}
		/>
	</Box>
))
