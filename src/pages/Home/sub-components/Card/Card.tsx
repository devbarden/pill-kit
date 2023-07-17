import { FC, memo, useCallback } from 'react'
import { Pressable, Text } from 'native-base'

import { Medicine } from '@app/types'
import { styles } from './Card.styles'

interface Props {
	data: Medicine
}

export const Card: FC<Props> = memo(({ data }) => {
	const { id, name } = data

	const onCardPress = useCallback(() => {
		console.log('CARD ', id)
	}, [id])

	return (
		<Pressable style={styles.card} key={id} onPress={onCardPress}>
			<Text fontSize="lg" color="white" style={styles.text}>
				{name}
			</Text>
		</Pressable>
	)
})
