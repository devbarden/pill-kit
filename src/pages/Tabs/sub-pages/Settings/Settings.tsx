import { FC, memo } from 'react'

import { SettingsForm } from '@app/forms'
import { BgWrapper, ContentWrapper } from '@app/components'

export const Settings: FC = memo(() => {
	return (
		<BgWrapper>
			<ContentWrapper>
				<SettingsForm />
			</ContentWrapper>
		</BgWrapper>
	)
})
