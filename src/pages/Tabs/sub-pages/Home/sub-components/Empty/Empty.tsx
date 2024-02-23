import { FC, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, PressableStateCallbackType } from 'react-native'
import { Box, Text } from 'native-base'

import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'
import { Icon, ContentWrapper } from '@app/components'

import { HomeContext } from '../../context'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()
	const { globalStyleProps } = useGlobalContext()
	const { addNewMedicineHandler } = useContext(HomeContext)

	const getButtonStyles = useCallback(
		({ pressed }: PressableStateCallbackType) => [
			styles.buttonWrapper,
			{
				backgroundColor: pressed
					? globalStyleProps.style.color.transparent
					: globalStyleProps.style.color.main,
			},
		],
		[globalStyleProps],
	)

	return (
		<ContentWrapper withHorizontalPaddings withVerticalPaddings>
			<Box style={styles.infoWrapper}>
				<Box style={styles.info}>
					<Icon
						size={88}
						name={EnumIconName.noData}
						color={globalStyleProps.style.color.highlight}
					/>
					<Text
						fontSize="lg"
						textAlign="center"
						color={globalStyleProps.style.color.highlight}>
						{t('home:empty')}
					</Text>
				</Box>
			</Box>

			<Pressable style={getButtonStyles} onPress={addNewMedicineHandler}>
				<Text fontSize="lg" color={globalStyleProps.style.color.primary}>
					{t('home:add')}
				</Text>
				<Icon
					name={EnumIconName.pill}
					color={globalStyleProps.style.color.primary}
					size={24}
				/>
			</Pressable>
		</ContentWrapper>
	)
})
