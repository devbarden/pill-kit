import { FC, memo, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'

import { Icon } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { MedicineFormContext } from '../../context'

import { styles } from './Header.styles'

export const Header: FC = memo(() => {
	const { t } = useTranslation()
	const { title, saveHandler, backHandler, isSaveBtnDisabled } =
		useContext(MedicineFormContext)

	const btnTextColor = useMemo(
		() => (isSaveBtnDisabled ? EnumColor.darkGrey : EnumColor.blue),
		[isSaveBtnDisabled],
	)

	return (
		<Box style={styles.wrapper}>
			<Pressable style={styles.backAction} onPress={backHandler}>
				<Icon name={EnumIconName.back} size={32} />
				<Box style={styles.title}>
					<Text fontSize="xl" numberOfLines={1}>
						{title}
					</Text>
				</Box>
			</Pressable>
			<Pressable style={styles.saveAction} onPress={saveHandler}>
				<Text
					fontSize="xl"
					fontWeight="bold"
					numberOfLines={1}
					color={btnTextColor}>
					{t('components:btn.save')}
				</Text>
			</Pressable>
		</Box>
	)
})
