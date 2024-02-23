import { FC, memo, useContext, useMemo } from 'react'
import { Box, Text } from 'native-base'

import { useGlobalContext } from '@app/hooks'

import { ModalContext } from '../../context'
import { ScrollContent } from '../../../ScrollContent'

import { styles } from './Bottom.styles'

export const Bottom: FC = memo(() => {
	const { title, content, withGreyBackgroundColor } = useContext(ModalContext)
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const wrapperStyles = useMemo(
		() => [
			style.wrapper,
			{
				backgroundColor: withGreyBackgroundColor
					? globalStyleProps.style.color.secondary
					: globalStyleProps.style.color.primary,
			},
		],
		[withGreyBackgroundColor, style, globalStyleProps],
	)

	return (
		<Box style={wrapperStyles}>
			<Box style={style.content}>
				<Box style={style.dash} />

				<Text
					fontSize="lg"
					textAlign="center"
					fontWeight="bold"
					numberOfLines={2}
					color={globalStyleProps.style.color.invert}>
					{title}
				</Text>

				<Box style={style.children}>
					<ScrollContent>{content}</ScrollContent>
				</Box>
			</Box>
		</Box>
	)
})
