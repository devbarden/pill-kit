import { FC, Fragment, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Pressable, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Icon, Header, ContentWrapper } from '@app/components'
import { EnumColor, EnumIconName, EnumStackRoute } from '@app/enums'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()
	const { navigate } = useNavigation()

	const addHandler = useCallback(() => {
		navigate(EnumStackRoute.createMedicine)
	}, [navigate])

	return (
		<Fragment>
			<Header title={t('home:title')} />
			<ContentWrapper withHorizontalPaddings withVerticalPaddings>
				<Box style={styles.infoWrapper}>
					<Pressable style={styles.info} onPress={addHandler}>
						<Icon
							name={EnumIconName.medicine}
							size={128}
							color={EnumColor.darkGrey}
						/>
						<Text fontSize="lg" textAlign="center" color={EnumColor.darkGrey}>
							{t('home:empty')}
						</Text>
					</Pressable>
				</Box>

				<Pressable style={styles.buttonWrapper} onPress={addHandler}>
					<Text fontSize="lg" color={EnumColor.white}>
						{t('home:add')}
					</Text>
					<Icon name={EnumIconName.pill} color={EnumColor.white} size={24} />
				</Pressable>
			</ContentWrapper>
		</Fragment>
	)
})
