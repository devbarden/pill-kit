import { FC, memo } from 'react'
import { DotIndicator } from 'react-native-indicators'

import { useGlobalContext } from '@app/hooks'

type TypeProps = {
	size?: number
}

export const Spinner: FC<TypeProps> = memo(({ size = 24 }) => {
	const { globalStyleProps } = useGlobalContext()

	return (
		<DotIndicator
			size={size}
			style={{ width: size, height: size }}
			color={globalStyleProps.style.color.main}
		/>
	)
})
