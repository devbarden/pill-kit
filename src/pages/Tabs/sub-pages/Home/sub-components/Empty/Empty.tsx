import { FC, Fragment, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { EnumStackRoute } from '@app/enums'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const addHandler = useCallback(() => {
		navigate(EnumStackRoute.createMedicine)
	}, [navigate])

	return (
		<Fragment>
			<Box style={styles.infoWrapper}>
				<Pressable style={styles.info} onPress={addHandler}>
					<MaterialCommunityIcons
						name="flask-empty-plus-outline"
						size={128}
						color="grey"
					/>
					<Text fontSize="lg" textAlign="center">
						{t('home:empty')}
					</Text>
				</Pressable>
			</Box>

			<Pressable style={styles.buttonWrapper} onPress={addHandler}>
				<Text fontSize="lg" color="white">
					{t('home:add')}
				</Text>
				<MaterialCommunityIcons name="pill" color="white" size={24} />
			</Pressable>
		</Fragment>
	)
})
