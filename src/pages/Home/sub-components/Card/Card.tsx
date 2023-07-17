import { FC, memo, useCallback } from 'react'
import { Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Medicine, ROUTES } from '@app/types'
import { styles } from './Card.styles'

interface Props {
	data: Medicine
}

export const Card: FC<Props> = memo(({ data }) => {
	const { id, name } = data
	const { navigate } = useNavigation()

	const onCardPress = useCallback(() => {
		navigate(ROUTES.EDIT_MEDICINE, { id })
	}, [navigate, id])

	return (
		<Pressable style={styles.card} key={id} onPress={onCardPress}>
			<Text fontSize="lg" color="white" style={styles.text}>
				{name}
			</Text>
		</Pressable>
	)
})
