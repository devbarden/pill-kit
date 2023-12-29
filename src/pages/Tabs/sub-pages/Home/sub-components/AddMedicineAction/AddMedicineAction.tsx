import { FC, memo, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text } from 'native-base'

import { Icon } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { HomeContext } from '../../context'

import { styles } from './AddMedicineAction.styles'

export const AddMedicineAction: FC = memo(() => {
	const { t } = useTranslation()
	const { addNewMedicineHandler } = useContext(HomeContext)

	return (
		<Pressable style={styles.wrapper} onPress={addNewMedicineHandler}>
			<Text fontSize="lg" color={EnumColor.red}>
				{t('home:add')}
			</Text>
			<Icon name={EnumIconName.pill} color={EnumColor.red} size={20} />
		</Pressable>
	)
})
