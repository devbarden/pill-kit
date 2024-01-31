import { FC, memo, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Text } from 'native-base'

import { EnumColor, EnumDateMode } from '@app/enums'
import { dateToFormat, timeToFormat } from '@app/utils'

import { styles } from './DateTimePress.styles'

type TypeProps = {
	value: number
	handler: () => void
	mode?: EnumDateMode
}

export const DateTimePress: FC<TypeProps> = memo(
	({ value, handler, mode = EnumDateMode.date }) => {
		const { i18n } = useTranslation()

		const date = useMemo(() => {
			if (mode === EnumDateMode.time) {
				return timeToFormat(value, i18n.language)
			}

			return dateToFormat(value, i18n.language)
		}, [mode, value, i18n.language])

		const getStyles = useCallback(
			({ pressed }: PressableStateCallbackType) => [
				styles.wrapper,
				{
					backgroundColor: pressed ? EnumColor.transparentGrey : EnumColor.grey,
				},
			],
			[],
		)

		return (
			<Pressable style={getStyles} onPress={handler}>
				<Text fontSize="md" numberOfLines={1}>
					{date}
				</Text>
			</Pressable>
		)
	},
)
