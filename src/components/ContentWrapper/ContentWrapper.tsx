import { FC, ReactElement, memo, useMemo } from 'react'
import { Box } from 'native-base'

import { useGlobalContext } from '@app/hooks'

import { styles } from './ContentWrapper.styles'

type TypeProps = {
	children: ReactElement | ReactElement[] | string
	withStretch?: boolean
	withVerticalPaddings?: boolean
	withHorizontalPaddings?: boolean
}

export const ContentWrapper: FC<TypeProps> = memo(
	({
		children,
		withStretch = true,
		withVerticalPaddings = false,
		withHorizontalPaddings = false,
	}) => {
		const { globalStyleProps } = useGlobalContext()

		const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

		return (
			<Box
				style={[
					style.wrapper,
					{
						paddingVertical: withVerticalPaddings ? 16 : 0,
						paddingHorizontal: withHorizontalPaddings ? 16 : 0,
					},
					withStretch ? { flex: 1 } : {},
				]}>
				{children}
			</Box>
		)
	},
)
