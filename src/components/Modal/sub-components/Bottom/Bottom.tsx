import { FC, memo, useContext, useMemo } from 'react'
import { Box, Text } from 'native-base'

import { EnumColor } from '@app/enums'

import { ModalContext } from '../../context'
import { ScrollContent } from '../../../ScrollContent'

import { styles } from './Bottom.styles'

export const Bottom: FC = memo(() => {
	const { title, content, withGreyBackgroundColor } = useContext(ModalContext)

	const wrapperStyles = useMemo(
		() => [
			styles.wrapper,
			{
				backgroundColor: withGreyBackgroundColor
					? EnumColor.grey
					: EnumColor.white,
			},
		],
		[withGreyBackgroundColor],
	)

	return (
		<Box style={wrapperStyles}>
			<Box style={styles.content}>
				<Box style={styles.dash} />

				<Text
					fontSize="lg"
					textAlign="center"
					fontWeight="bold"
					numberOfLines={2}
					color={EnumColor.black}>
					{title}
				</Text>

				<Box style={styles.children}>
					<ScrollContent>{content}</ScrollContent>
				</Box>
			</Box>
		</Box>
	)
})
