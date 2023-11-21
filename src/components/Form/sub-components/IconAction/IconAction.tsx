import { FC, ReactElement, memo } from 'react'
import { Pressable } from 'native-base'
import {
	AntDesign,
	Feather,
	MaterialIcons,
	FontAwesome5,
} from '@expo/vector-icons'

import { EnumColor, EnumFormIconActionMode } from '@app/enums'

import { styles } from './IconAction.styles'

type TypeProps = {
	mode: EnumFormIconActionMode
	handler: () => void
}

const ICONS_MAP: Record<EnumFormIconActionMode, ReactElement> = {
	[EnumFormIconActionMode.mail]: (
		<Feather name="mail" size={24} color={EnumColor.darkGrey} />
	),

	[EnumFormIconActionMode.arrow]: (
		<Feather name="chevron-right" size={24} color={EnumColor.darkGrey} />
	),

	[EnumFormIconActionMode.remove]: (
		<MaterialIcons name="highlight-remove" size={28} color={EnumColor.red} />
	),

	[EnumFormIconActionMode.money]: (
		<FontAwesome5 name="money-bill" size={24} color={EnumColor.green} />
	),

	[EnumFormIconActionMode.star]: (
		<AntDesign name="star" size={24} color={EnumColor.blue} />
	),
}

export const IconAction: FC<TypeProps> = memo(({ mode, handler }) => (
	<Pressable onPress={handler} style={styles.wrapper}>
		{ICONS_MAP[mode]}
	</Pressable>
))
