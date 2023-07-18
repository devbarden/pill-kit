import { FC, memo, useCallback } from 'react'
import { Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome as Icon } from '@expo/vector-icons'

import { Medicine, ROUTES } from '@app/types'
import { styles } from './Card.styles'
import { useRemoveMedicineById } from '@app/hooks'

interface Props {
	data: Medicine
}

export const Card: FC<Props> = memo(({ data }) => {
	const { id, name } = data
	const { navigate } = useNavigation()
	const { action: remove, isLoading: isRemoving } = useRemoveMedicineById()

	const onCardPress = useCallback(() => {
		navigate(ROUTES.EDIT_MEDICINE, { id })
	}, [navigate, id])

	const deleteHandler = useCallback(async () => {
		await remove(id)
	}, [id, remove])

	return (
		<Pressable style={styles.card} key={id} onPress={onCardPress}>
			<Text fontSize="lg" color="white" style={styles.text}>
				{isRemoving ? 'Removing...' : name}
			</Text>

			<Pressable onPress={deleteHandler}>
				<Icon name="remove" color="white" size={24} />
			</Pressable>
		</Pressable>
	)
})
