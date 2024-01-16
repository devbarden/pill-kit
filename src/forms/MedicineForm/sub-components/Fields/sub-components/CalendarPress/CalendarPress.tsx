import { FC, memo, useMemo, useCallback } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Text } from 'native-base'

import { EnumColor } from '@app/enums'
import { dateToFormat } from '@app/utils'

import { styles } from './CalendarPress.styles'

type TypeProps = {
	value: number
	handler: () => void
}

export const CalendarPress: FC<TypeProps> = memo(({ value, handler }) => {
	const date = useMemo(() => dateToFormat(value), [value])

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
			<Text numberOfLines={1}>{date}</Text>
		</Pressable>
	)
})
