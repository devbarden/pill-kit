import { FC, memo, useCallback, useMemo } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { uid } from '@app/utils'
import { TypeSelectItem } from '@app/types'

import { styles } from './ModalBottomListContent.styles'
import { useGlobalContext } from '@app/hooks'

type TypeProps = {
	items: TypeSelectItem[]
	handler: (value: string) => void
	close: () => void
}

export const ModalBottomListContent: FC<TypeProps> = memo(
	({ items, handler, close }) => {
		const { globalStyleProps } = useGlobalContext()

		const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

		const getItemStyles = useCallback(
			({ pressed }: PressableStateCallbackType) => [
				style.item,
				pressed ? style.pressedBg : style.defaultBg,
			],
			[style],
		)

		const pressHandler = useCallback(
			async (item: TypeSelectItem) => {
				await handler(item.value)
				close()
			},
			[handler, close],
		)

		return (
			<Box style={style.wrapper}>
				{items.map((item) => (
					<Pressable
						key={uid()}
						style={getItemStyles}
						onPress={() => pressHandler(item)}>
						<Text
							fontSize="lg"
							textAlign="center"
							numberOfLines={1}
							color={globalStyleProps.style.color.invert}>
							{item.label}
						</Text>
					</Pressable>
				))}
			</Box>
		)
	},
)
