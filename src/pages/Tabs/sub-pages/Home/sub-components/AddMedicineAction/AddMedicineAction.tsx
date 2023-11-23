import { FC, memo, useContext } from 'react'
import { Pressable } from 'native-base'

import { Icon } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { HomeContext } from '../../context'

export const AddMedicineAction: FC = memo(() => {
	const { addNewMedicineHandler } = useContext(HomeContext)

	return (
		<Pressable onPress={addNewMedicineHandler}>
			<Icon name={EnumIconName.medicine} color={EnumColor.red} size={32} />
		</Pressable>
	)
})
