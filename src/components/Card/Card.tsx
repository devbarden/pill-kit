import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome as Icon } from '@expo/vector-icons'

import { Medicine } from '@app/types'
import { ROUTES } from '@app/constants'
import { useEndpoints } from '@app/hooks'

import { styles } from './Card.styles'

interface Props {
	data: Medicine
}

export const Card: FC<Props> = memo(({ data }) => {
	const { id, name } = data
	const { t } = useTranslation()
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
			<Text
				fontSize="lg"
				color="white"
				style={styles.text}
				numberOfLines={1}
				ellipsizeMode="tail">
				{isRemoving ? t('actions:removing') : name}
			</Text>

			<Pressable onPress={deleteHandler}>
				<Icon name="remove" color="white" size={24} />
			</Pressable>
		</Pressable>
	)
})
