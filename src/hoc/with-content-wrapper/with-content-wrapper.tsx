import { ComponentType } from 'react'

import { ContentWrapper } from '@app/components'

export const withContentWrapper = (Child: ComponentType) => () => (
	<ContentWrapper>
		<Child />
	</ContentWrapper>
)
