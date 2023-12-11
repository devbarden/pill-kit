import { FC, memo } from 'react'

import { SafeArea } from '@app/components'

import { Content } from './sub-components'

export const Welcome: FC = memo(() => (
	<SafeArea>
		<Content />
	</SafeArea>
))
