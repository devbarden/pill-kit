import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Input as BaseInput, IInputProps } from 'native-base'

import { isRTL } from '@app/utils'

import { styles, TypeStyleProps } from './Input.styles'

export const Input: FC<IInputProps> = memo((props) => {
	const { i18n } = useTranslation()

	const isLanguageRTL = useMemo(() => isRTL(i18n.language), [i18n.language])

	const styleProps: TypeStyleProps = useMemo(
		() => ({
			isLanguageRTL,
		}),
		[isLanguageRTL],
	)

	const style = useMemo(() => styles(styleProps), [styleProps])

	return (
		<Box style={style.wrapper}>
			<BaseInput
				isFullWidth
				variant="unstyled"
				textAlign={isLanguageRTL ? 'right' : 'left'}
				flexDirection={isLanguageRTL ? 'row-reverse' : 'row'}
				style={style.input}
				{...props}
			/>
		</Box>
	)
})
