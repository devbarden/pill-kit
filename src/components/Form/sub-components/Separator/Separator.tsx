import { FC, memo, useMemo } from 'react'
import { Box } from 'native-base'

import { useGlobalContext } from '@app/hooks'

import { styles } from './Separator.styles'

export const Separator: FC = memo(() => {
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	return <Box style={style.separator} />
})
