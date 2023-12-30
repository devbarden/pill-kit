import { FC, memo, useContext } from 'react'
import { Pressable } from 'native-base'

import { Icon } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { HomeContext } from '../../context'

import { styles } from './AddMedicineAction.styles'

export const AddMedicineAction: FC = memo(() => {
	const { addNewMedicineHandler } = useContext(HomeContext)

	return (
		<Pressable style={styles.wrapper} onPress={addNewMedicineHandler}>
			<Icon name={EnumIconName.add} color={EnumColor.black} size={20} />
		</Pressable>
	)
})
