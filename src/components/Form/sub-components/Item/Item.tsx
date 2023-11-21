import { FC, ReactElement, memo, useMemo } from 'react'
import { Box, Text } from 'native-base'

import { styles } from './Item.styles'

type TypeProps = {
	name?: string | ReactElement
	children: ReactElement
}

export const Item: FC<TypeProps> = memo(({ name, children }) => {
	const isNameExist = useMemo(() => Boolean(name), [name])

	return (
		<Box style={styles.item}>
			{isNameExist && <Text style={styles.text}>{name}</Text>}
			<Box style={[styles.value, { paddingVertical: isNameExist ? 0 : 8 }]}>
				{children}
			</Box>
		</Box>
	)
})
