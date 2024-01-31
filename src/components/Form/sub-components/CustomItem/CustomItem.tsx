import { FC, ReactElement, memo, useMemo } from 'react'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName, EnumLanguageCode } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles, TypeStyleProps } from './CustomItem.styles'
import { useTranslation } from 'react-i18next'

type TypeProps = {
	text: string
	iconName?: EnumIconName
	iconColor?: EnumColor
	children?: ReactElement | ReactElement[] | string
}

export const CustomItem: FC<TypeProps> = memo(
	({ text, iconName, iconColor = EnumColor.darkGrey, children }) => {
		const { i18n } = useTranslation()

		const isArabic = useMemo(
			() => i18n.language.includes(EnumLanguageCode.ar),
			[i18n.language],
		)

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
