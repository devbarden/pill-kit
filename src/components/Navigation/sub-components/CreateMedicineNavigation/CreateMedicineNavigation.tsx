import * as Haptics from 'expo-haptics'
import { FC, memo, useCallback } from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useGlobalContext } from '@app/hooks'
import { EnumIconName, EnumStackRoute } from '@app/enums'

import { Icon } from '../../../Icon'

import { styles } from './CreateMedicineNavigation.styles'

type TypeProps = {
	name: EnumIconName
}

export const CreateMedicineNavigation: FC<TypeProps> = memo(({ name }) => {
	const { navigate } = useNavigation()
	const { globalStyleProps } = useGlobalContext()

	const navigateToRoute = useCallback(() => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
		navigate(EnumStackRoute.createMedicine)
	}, [navigate])

	return (
		<Pressable onPressIn={navigateToRoute} style={styles.wrapper}>
			<Icon
				name={name}
				size={24}
				color={globalStyleProps.style.color.highlight}
			/>
		</Pressable>
	)
})
