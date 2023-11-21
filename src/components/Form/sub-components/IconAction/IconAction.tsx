import { FC, ReactElement, memo } from 'react'
import { Pressable } from 'native-base'
import {
	AntDesign,
	Feather,
	MaterialIcons,
	FontAwesome5,
} from '@expo/vector-icons'

import { COLORS, FORM_ICON_ACTION_MODES } from '@app/constants'

import { styles } from './IconAction.styles'

interface I_Props {
	mode: FORM_ICON_ACTION_MODES
	handler: () => void
}

const ICONS_MAP: Record<FORM_ICON_ACTION_MODES, ReactElement> = {
	[FORM_ICON_ACTION_MODES.MAIL]: (
		<Feather name="mail" size={24} color={COLORS.DARK_GREY} />
	),

	[FORM_ICON_ACTION_MODES.ARROW]: (
		<Feather name="chevron-right" size={24} color={COLORS.DARK_GREY} />
	),

	[FORM_ICON_ACTION_MODES.REMOVE]: (
		<MaterialIcons name="highlight-remove" size={28} color={COLORS.RED} />
	),

	[FORM_ICON_ACTION_MODES.MONEY]: (
		<FontAwesome5 name="money-bill" size={24} color={COLORS.GREEN} />
	),

	[FORM_ICON_ACTION_MODES.STAR]: (
		<AntDesign name="star" size={24} color={COLORS.BLUE} />
	),
}

export const IconAction: FC<I_Props> = memo(({ mode, handler }) => (
	<Pressable onPress={handler} style={styles.wrapper}>
		{ICONS_MAP[mode]}
	</Pressable>
))
