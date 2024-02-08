import { FC, memo, useMemo } from 'react'
import { Box, Input as BaseInput, IInputProps } from 'native-base'

import { useGlobalContext } from '@app/hooks'

import { styles } from './Input.styles'

export const Input: FC<IInputProps> = memo((props) => {
	const { isLocaleRTL, globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	return (
		<Box style={style.wrapper}>
			<BaseInput
				isFullWidth
				variant="unstyled"
				textAlign={isLocaleRTL ? 'right' : 'left'}
				flexDirection={isLocaleRTL ? 'row-reverse' : 'row'}
				style={style.input}
				{...props}
			/>
		</Box>
	)
})
