import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import { ROUTES } from '@app/types'
import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const addHandler = useCallback(() => {
		navigate(ROUTES.CREATE_MEDICINE)
	}, [navigate])

	return (
		<Box style={styles.wrapper}>
			<Pressable style={styles.infoBlock} onPress={addHandler}>
				<Icon name="flask-empty-plus-outline" size={128} color="grey" />
				<Text fontSize="lg">{t('home:emptyInfo')}</Text>
			</Pressable>

			<Pressable style={styles.buttonWrapper} onPress={addHandler}>
				<Text fontSize="lg" color="white">
					{t('home:addButton')}
				</Text>
				<Icon name="pill" color="white" size={24} />
			</Pressable>
		</Box>
	)
})
