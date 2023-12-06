import { FC, memo, useCallback } from 'react'
import { Pressable } from 'react-native'
import { Box } from 'native-base'

import { uid } from '@app/utils'
import { EnumMedicineColor } from '@app/enums'

import { styles } from './ModalColorListContent.styles'

type TypeProps = {
	items: EnumMedicineColor[]
	handler: (value: string) => void
	close: () => void
}

export const ModalColorListContent: FC<TypeProps> = memo(
	({ items, handler, close }) => {
		const pressHandler = useCallback(
			(color: EnumMedicineColor) => {
				handler(color)
				close()
			},
			[handler, close],
		)

		return (
			<Box style={styles.wrapper}>
				{items.map((color) => (
					<Pressable
						key={uid()}
						style={[
							styles.item,
							{
								backgroundColor: color,
							},
						]}
						onPress={() => pressHandler(color)}></Pressable>
				))}
			</Box>
		)
	},
)
