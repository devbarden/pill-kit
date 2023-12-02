import { FC, memo, useCallback } from 'react'
import { Pressable } from 'react-native'
import { Box } from 'native-base'

import { uid } from '@app/utils'
import { TypeSelectColors } from '@app/typess'

import { styles } from './ModalColorListContent.styles'

type TypeProps = {
	items: TypeSelectColors[]
	handler: (value: string) => void
	close: () => void
}

export const ModalColorListContent: FC<TypeProps> = memo(
	({ items, handler, close }) => {
		const pressHandler = useCallback(
			(item: TypeSelectColors) => {
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
						style={[
							styles.item,
							{
								backgroundColor: item.value,
							},
						]}
						onPress={() => pressHandler(item)}></Pressable>
				))}
			</Box>
		)
	},
)
