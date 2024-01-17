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
					<Box style={styles.iconsWrapper}>
						<Icon
							size={72}
							name={EnumIconName.chart}
							color={EnumColor.transparentGrey}
						/>
						<Icon
							size={72}
							name={EnumIconName.chartPlus}
							color={EnumColor.transparentGrey}
						/>
					</Box>
					<Box style={styles.iconsWrapper}>
						<Icon
							size={72}
							name={EnumIconName.chartTimeline}
							color={EnumColor.transparentGrey}
						/>
						<Icon
							size={72}
							name={EnumIconName.pie}
							color={EnumColor.transparentGrey}
						/>
					</Box>

					<Text
						fontSize="lg"
						textAlign="center"
						color={EnumColor.transparentGrey}>
						{t('analytic:empty')}
					</Text>
				</Box>
			</ContentWrapper>
		</Fragment>
	)
})
