import { FC, ReactElement, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName } from '@app/enums'
import { isRTL } from '@app/utils'

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
		const { i18n } = useTranslation()

		const isLanguageRTL = useMemo(() => isRTL(i18n.language), [i18n.language])

		const styleProps: TypeStyleProps = useMemo(
			() => ({
				isLanguageRTL,
			}),
			[isLanguageRTL],
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
