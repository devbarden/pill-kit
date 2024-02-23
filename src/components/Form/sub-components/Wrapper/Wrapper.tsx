import { FC, ReactElement, memo, useMemo } from 'react'
import { Box } from 'native-base'

import { useGlobalContext } from '@app/hooks'

import { styles } from './Wrapper.styles'

type TypeProps = {
	children: ReactElement | ReactElement[]
}

export const Wrapper: FC<TypeProps> = memo(({ children }) => {
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	return <Box style={style.wrapper}>{children}</Box>
})
