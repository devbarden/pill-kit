import { FC, ReactElement, memo } from 'react'
import { Box } from 'native-base'

import { styles } from './ContentWrapper.styles'
import { COLORS } from '@app/constants'

interface Props {
	withStretch?: boolean
	withBackground?: boolean
	withVerticalPaddings?: boolean
	withHorizontalPaddings?: boolean
	children: ReactElement | ReactElement[] | string
}

export const ContentWrapper: FC<Props> = memo(
	({
		children,
		withStretch = true,
		withBackground = true,
		withVerticalPaddings = false,
		withHorizontalPaddings = false,
	}) => (
		<Box
			style={[
				styles.wrapper,
				{
					flex: withStretch ? 1 : 0,
					paddingVertical: withVerticalPaddings ? 16 : 0,
					paddingHorizontal: withHorizontalPaddings ? 16 : 0,
					backgroundColor: withBackground ? COLORS.GREY : 'inherit',
				},
			]}>
			{children}
		</Box>
	),
)
