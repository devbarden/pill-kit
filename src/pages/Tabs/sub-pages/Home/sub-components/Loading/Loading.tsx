import { FC, memo } from 'react'
import { Box, Skeleton } from 'native-base'

import { useGlobalContext } from '@app/hooks'

import { styles } from './Loading.styles'

export const Loading: FC = memo(() => {
	const { globalStyleProps } = useGlobalContext()

	return (
		<Box style={styles.wrapper}>
			<Skeleton
				h={100}
				borderRadius={12}
				startColor={globalStyleProps.style.color.primary}
				endColor={globalStyleProps.style.color.secondary}
			/>
			<Skeleton
				h={100}
				borderRadius={12}
				startColor={globalStyleProps.style.color.primary}
				endColor={globalStyleProps.style.color.secondary}
			/>
		</Box>
	)
})
