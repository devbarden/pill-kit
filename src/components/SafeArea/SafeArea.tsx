import { FC, ReactElement, memo, useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './SafeArea.styles'
import { useGlobalContext } from '@app/hooks'

type TypeProps = {
	children: ReactElement
}

export const SafeArea: FC<TypeProps> = memo(({ children }) => {
	const { globalStyleProps } = useGlobalContext()

	const style = useMemo(() => styles(globalStyleProps), [globalStyleProps])

	return <SafeAreaView style={style.wrapper}>{children}</SafeAreaView>
})
