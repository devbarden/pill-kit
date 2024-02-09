import LoaderKit from 'react-native-loader-kit'
import { FC, memo } from 'react'

import { EnumColor } from '@app/enums'

type TypeProps = {
	size?: number
}

export const Spinner: FC<TypeProps> = memo(({ size = 24 }) => (
	<LoaderKit
		name="BallPulse"
		size={size}
		style={{ width: size, height: size }}
		color={EnumColor.red}
	/>
))
