import { FC, memo, useContext } from 'react'
import { Box } from 'native-base'

import { MedicineFormContext } from '../../../../context'

import { styles } from './ColorBox.styles'

export const ColorBox: FC = memo(() => {
	const { form } = useContext(MedicineFormContext)

	return <Box style={[styles.wrapper, { backgroundColor: form.color }]} />
})
