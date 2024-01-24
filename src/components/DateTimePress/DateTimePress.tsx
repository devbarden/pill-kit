import { FC, memo, useMemo, useCallback } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Text } from 'native-base'

import { dateToFormat, getTimeByDate } from '@app/utils'
import { EnumColor, EnumDateMode } from '@app/enums'

import { styles } from './DateTimePress.styles'

type TypeProps = {
	value: number
	handler: () => void
	mode?: EnumDateMode
}

export const DateTimePress: FC<TypeProps> = memo(
	({ value, handler, mode = EnumDateMode.date }) => {
		const date = useMemo(() => {
			if (mode === EnumDateMode.time) {
				const { hours, minutes } = getTimeByDate(value)

				return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`
			}

			return dateToFormat(value)
		}, [mode, value])

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
