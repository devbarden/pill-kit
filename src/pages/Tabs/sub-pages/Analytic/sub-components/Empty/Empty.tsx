import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text } from 'native-base'

import { EnumIconName } from '@app/enums'
import { useGlobalContext } from '@app/hooks'
import { Header, ContentWrapper, Icon } from '@app/components'

import { styles } from './Empty.styles'

export const Empty: FC = memo(() => {
	const { t } = useTranslation()
	const { globalStyleProps } = useGlobalContext()

	return (
		<Fragment>
			<Header title={t('analytic:title')} />
			<ContentWrapper withHorizontalPaddings withVerticalPaddings>
				<Box style={styles.wrapper}>
					<Box style={styles.iconsWrapper}>
						<Icon
							size={72}
							name={EnumIconName.chart}
							color={globalStyleProps.style.color.highlight}
						/>
						<Icon
							size={72}
							name={EnumIconName.chartPlus}
							color={globalStyleProps.style.color.highlight}
						/>
					</Box>
					<Box style={styles.iconsWrapper}>
						<Icon
							size={72}
							name={EnumIconName.chartTimeline}
							color={globalStyleProps.style.color.highlight}
						/>
						<Icon
							size={72}
							name={EnumIconName.pie}
							color={globalStyleProps.style.color.highlight}
						/>
					</Box>

					<Text
						fontSize="lg"
						textAlign="center"
						color={globalStyleProps.style.color.highlight}>
						{t('analytic:empty')}
					</Text>
				</Box>
			</ContentWrapper>
		</Fragment>
	)
})
