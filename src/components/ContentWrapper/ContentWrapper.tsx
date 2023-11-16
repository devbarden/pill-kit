import { FC, ReactElement, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './ContentWrapper.styles'

interface Props {
	withoutStretch?: boolean
	children: ReactElement | ReactElement[] | string
}

export const ContentWrapper: FC<Props> = memo(
	({ children, withoutStretch }) => (
		<Box style={[styles.wrapper, { flex: withoutStretch ? 0 : 1 }]}>
			{children}
		</Box>
	),
)
