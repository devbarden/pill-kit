import { FC, memo, useCallback } from 'react'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { uid } from '@app/utils'
import { TypeSelectItem } from '@app/xtypes'

import { styles } from './ModalBottomListContent.styles'

type TypeProps = {
	items: TypeSelectItem[]
	handler: (value: string) => void
	close: () => void
}

export const ModalBottomListContent: FC<TypeProps> = memo(
	({ items, handler, close }) => {
		const getItemStyles = useCallback(
			({ pressed }: PressableStateCallbackType) => [
				styles.item,
				pressed ? styles.pressedBg : styles.defaultBg,
			],
			[],
		)

		const pressHandler = useCallback(
			(item: TypeSelectItem) => {
				handler(item.value)
				close()
			},
			[handler, close],
		)

		return (
			<Box style={styles.wrapper}>
				{items.map((item) => (
					<Pressable
						key={uid()}
						style={getItemStyles}
						onPress={() => pressHandler(item)}>
						<Text fontSize="lg" textAlign="center" numberOfLines={1}>
							{item.label}
						</Text>
					</Pressable>
				))}
			</Box>
		)
	},
)
