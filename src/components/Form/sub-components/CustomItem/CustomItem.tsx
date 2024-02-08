import { FC, ReactElement, memo, useMemo } from 'react'
import { Box, Text } from 'native-base'

import { useGlobalContext } from '@app/hooks'
import { EnumColor, EnumIconName } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles } from './CustomItem.styles'

type TypeProps = {
	text: string
	iconName?: EnumIconName
	iconColor?: EnumColor
	children?: ReactElement | ReactElement[] | string
}

export const CustomItem: FC<TypeProps> = memo(
	({ text, iconName, iconColor = EnumColor.darkGrey, children }) => {
		const { globalStyleProps } = useGlobalContext()

		const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

		return (
			<Box style={style.wrapper}>
				<Box style={style.fullFlex}>
					<Box style={style.titleWrapper}>
						{iconName && <Icon name={iconName} color={iconColor} size={20} />}
						<Box style={style.title}>
							<Text numberOfLines={1} style={style.text}>
								{text}
							</Text>
						</Box>
					</Box>
				</Box>

				<Box style={style.children}>{children}</Box>
			</Box>
		)
	},
)
