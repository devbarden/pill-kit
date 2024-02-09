import { FC, ReactElement, memo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Box } from 'native-base'

import { styles } from './ContentWrapper.styles'
import { EnumColor } from '@app/enums'

type TypeProps = {
	children: ReactElement | ReactElement[] | string
	style?: StyleProp<ViewStyle>
	withStretch?: boolean
	withBackground?: boolean
	withVerticalPaddings?: boolean
	withHorizontalPaddings?: boolean
}

export const ContentWrapper: FC<TypeProps> = memo(
	({
		children,
		style = {},
		withStretch = true,
		withBackground = true,
		withVerticalPaddings = false,
		withHorizontalPaddings = false,
	}) => (
		<Box
			style={[
				style,
				styles.wrapper,
				{
					paddingVertical: withVerticalPaddings ? 16 : 0,
					paddingHorizontal: withHorizontalPaddings ? 16 : 0,
					backgroundColor: withBackground ? EnumColor.grey : 'inherit',
				},
				withStretch ? { flex: 1 } : {},
			]}>
			{children}
		</Box>
	),
)
