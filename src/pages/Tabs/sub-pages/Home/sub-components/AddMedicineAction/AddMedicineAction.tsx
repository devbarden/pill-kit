import { FC, memo, useContext } from 'react'
import { Pressable } from 'native-base'

import { Icon } from '@app/components'
import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { HomeContext } from '../../context'

import { styles } from './AddMedicineAction.styles'

export const AddMedicineAction: FC = memo(() => {
	const { addNewMedicineHandler } = useContext(HomeContext)
	const { globalStyleProps } = useGlobalContext()

	return (
		<Pressable style={styles.wrapper} onPress={addNewMedicineHandler}>
			<Icon
				name={EnumIconName.add}
				color={globalStyleProps.style.color.main}
				size={24}
			/>
		</Pressable>
	)
})
