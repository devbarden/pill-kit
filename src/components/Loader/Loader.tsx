import { FC, memo, useMemo } from 'react'
import { Box } from 'native-base'

import { Logo, PillKit } from '@app/svg'
import { useGlobalContext } from '@app/hooks'

import { styles } from './Loader.styles'

export const Loader: FC = memo(() => {
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	return (
		<Box style={style.wrapper}>
			<Logo />
			<PillKit />
		</Box>
	)
})
