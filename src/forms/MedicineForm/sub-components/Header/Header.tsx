import { FC, memo, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'

import { Icon } from '@app/components'
import { EnumColor, EnumIconName } from '@app/enums'

import { MedicineFormContext } from '../../context'

import { styles } from './Header.styles'

export const Header: FC = memo(() => {
	const { t } = useTranslation()
	const { saveHandler, backHandler, isSaveBtnDisabled } =
		useContext(MedicineFormContext)

	const btnTextColor = useMemo(
		() => (isSaveBtnDisabled ? EnumColor.darkGrey : EnumColor.red),
		[isSaveBtnDisabled],
	)

	return (
		<Box style={styles.wrapper}>
			<Pressable style={styles.backAction} onPress={backHandler}>
				<Icon name={EnumIconName.back} size={20} />
				<Box style={styles.title}>
					<Text fontSize="lg" textAlign="left" numberOfLines={1}>
						{t('component:button.back')}
					</Text>
				</Box>
			</Pressable>
			<Pressable style={styles.saveAction} onPress={saveHandler}>
				<Text
					fontSize="lg"
					fontWeight="bold"
					numberOfLines={1}
					color={btnTextColor}>
					{t('component:button.save')}
				</Text>
			</Pressable>
		</Box>
	)
})
