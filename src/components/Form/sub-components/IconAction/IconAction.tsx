import { FC, ReactElement, memo } from 'react'
import { Pressable } from 'native-base'
import { Feather, MaterialIcons } from '@expo/vector-icons'

import { COLORS, FORM_ICON_ACTION_MODES } from '@app/constants'

import { styles } from './IconAction.styles'

interface Props {
	mode: FORM_ICON_ACTION_MODES
	handler: () => void
}

const ICONS_MAP: Record<FORM_ICON_ACTION_MODES, ReactElement> = {
	[FORM_ICON_ACTION_MODES.MAIL]: (
		<Feather name="mail" size={24} color={COLORS.DARK_GREY} />
	),

	[FORM_ICON_ACTION_MODES.ARROW]: (
		<Feather name="chevron-right" size={20} color={COLORS.DARK_GREY} />
	),

	[FORM_ICON_ACTION_MODES.REMOVE]: (
		<MaterialIcons name="highlight-remove" size={24} color={COLORS.RED} />
	),
}

export const IconAction: FC<Props> = memo(({ mode, handler }) => (
	<Pressable onPress={handler} style={styles.wrapper}>
		{ICONS_MAP[mode]}
	</Pressable>
))
