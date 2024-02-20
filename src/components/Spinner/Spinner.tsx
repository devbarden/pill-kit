import { FC, memo } from 'react'
import { DotIndicator } from 'react-native-indicators'

import { EnumColor } from '@app/enums'

type TypeProps = {
	size?: number
}

export const Spinner: FC<TypeProps> = memo(({ size = 24 }) => (
	<DotIndicator
		size={size}
		style={{ width: size, height: size }}
		color={EnumColor.red}
	/>
))
