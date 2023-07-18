import { FC, memo, useCallback } from 'react'
import { Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome as Icon } from '@expo/vector-icons'

import { useEndpoints } from '@app/hooks'
import { Medicine, ROUTES } from '@app/types'

import { styles } from './Card.styles'

interface Props {
	data: Medicine
}

export const Card: FC<Props> = memo(({ data }) => {
	const { id, name } = data
	const { navigate } = useNavigation()
	const { useRemoveMedicine } = useEndpoints()
	const { mutateAsync: remove, isLoading: isRemoving } = useRemoveMedicine()

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
