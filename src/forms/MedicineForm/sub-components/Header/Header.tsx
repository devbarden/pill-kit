import { FC, memo, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'

import { Icon } from '@app/components'
import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'

import { MedicineFormContext } from '../../context'

import { styles } from './Header.styles'

export const Header: FC = memo(() => {
	const { t } = useTranslation()
	const { globalStyleProps } = useGlobalContext()
	const { saveHandler, backHandler, isSaveBtnDisabled } =
		useContext(MedicineFormContext)

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	const btnTextColor = useMemo(
		() =>
			isSaveBtnDisabled
				? globalStyleProps.style.color.highlight
				: globalStyleProps.style.color.main,
		[isSaveBtnDisabled, globalStyleProps],
	)

	return (
		<Box style={style.wrapper}>
			<Pressable style={style.backAction} onPress={backHandler}>
				<Icon
					name={EnumIconName.back}
					size={20}
					color={globalStyleProps.style.color.invert}
				/>
				<Box style={style.title}>
					<Text
						fontSize="lg"
						textAlign="left"
						numberOfLines={1}
						color={globalStyleProps.style.color.invert}>
						{t('component:button.back')}
					</Text>
				</Box>
			</Pressable>
			<Pressable style={style.saveAction} onPress={saveHandler}>
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
