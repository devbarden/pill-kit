import * as Haptics from 'expo-haptics'
import { FC, memo, useMemo, useCallback } from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { EnumStackRoute } from '@app/enums'

import { getIcon } from '../../utils'

import { styles } from './CreateMedicineNavigation.styles'

export const CreateMedicineNavigation: FC = memo(() => {
	const { navigate } = useNavigation()

	const Icon = useMemo(() => getIcon(EnumStackRoute.createMedicine, false), [])

	const navigateToRoute = useCallback(() => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		navigate(EnumStackRoute.createMedicine)
	}, [navigate])

	return (
		<Pressable onPressIn={navigateToRoute} style={styles.wrapper}>
			{Icon}
		</Pressable>
	)
})
