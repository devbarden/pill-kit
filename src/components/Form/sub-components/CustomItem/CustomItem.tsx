import { FC, ReactElement, memo, useContext, useMemo } from 'react'
import { Box, Text } from 'native-base'

import { GlobalStateContext } from '@app/context'
import { EnumColor, EnumIconName, EnumLanguageCode } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles, TypeStyleProps } from './CustomItem.styles'

type TypeProps = {
	text: string
	iconName?: EnumIconName
	iconColor?: EnumColor
	children?: ReactElement | ReactElement[] | string
}

export const CustomItem: FC<TypeProps> = memo(
	({ text, iconName, iconColor = EnumColor.darkGrey, children }) => {
		const { language } = useContext(GlobalStateContext)

		const isArabic = useMemo(() => language === EnumLanguageCode.ar, [language])

		const styleProps: TypeStyleProps = useMemo(
			() => ({
				isArabic,
			}),
			[isArabic],
		)

		const style = useMemo(() => styles(styleProps), [styleProps])

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
