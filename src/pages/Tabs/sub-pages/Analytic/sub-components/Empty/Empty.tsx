import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text } from 'native-base'

import { EnumColor, EnumIconName } from '@app/enums'
import { Header, ContentWrapper, Icon } from '@app/components'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Header title={t('analytic:title')} />
			<ContentWrapper withHorizontalPaddings withVerticalPaddings>
				<Box style={styles.wrapper}>
					<Icon
						name={EnumIconName.analytic}
						size={128}
						color={EnumColor.transparentGrey}
					/>
					<Text fontSize="2xl" textAlign="center" color={EnumColor.darkGrey}>
						{t('analytic:empty')}
					</Text>
				</Box>
			</ContentWrapper>
		</Fragment>
	)
})
