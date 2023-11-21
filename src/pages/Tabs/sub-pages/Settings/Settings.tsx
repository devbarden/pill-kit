import { FC, Fragment, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { SettingsForm } from '@app/forms'
import { ContentWrapper, Header } from '@app/components'

export const Settings: FC = memo(() => {
	const { t } = useTranslation()

	return (
		<Fragment>
			<Header title={t('settings:title')} />
			<ContentWrapper withHorizontalPaddings>
				<SettingsForm />
			</ContentWrapper>
		</Fragment>
	)
})
