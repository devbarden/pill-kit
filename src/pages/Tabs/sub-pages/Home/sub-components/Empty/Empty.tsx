import { FC, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName } from '@app/enums'
import { Icon, ContentWrapper } from '@app/components'

import { styles } from './Empty.styles'
import { HomeContext } from '../../context'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()
	const { addNewMedicineHandler } = useContext(HomeContext)

	const getButtonStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.buttonWrapper,
			{ backgroundColor: pressed ? EnumColor.darkRed : EnumColor.red },
		],
		[],
	)

	return (
		<ContentWrapper withHorizontalPaddings withVerticalPaddings>
			<Box style={styles.infoWrapper}>
				<Box style={styles.info}>
					<Icon
						size={80}
						name={EnumIconName.noData}
						color={EnumColor.transparentGrey}
					/>
					<Text
						fontSize="lg"
						textAlign="center"
						color={EnumColor.transparentGrey}>
						{t('home:empty')}
					</Text>
				</Box>
			</Box>

			<Pressable style={getButtonStyles} onPress={addNewMedicineHandler}>
				<Text fontSize="lg" color={EnumColor.white}>
					{t('home:add')}
				</Text>
				<Icon name={EnumIconName.pill} color={EnumColor.white} size={24} />
			</Pressable>
		</ContentWrapper>
	)
})
