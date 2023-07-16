import { FC, memo } from 'react'
import { NativeBaseProvider, Box } from 'native-base'

import { Home } from '@app/pages'
import { useInitMedicines } from '@app/hooks'
import '@app/i18n'

const App: FC = memo(() => {
	const { isLoading } = useInitMedicines()

	if (isLoading) {
		return (
			<NativeBaseProvider>
				<Box>The Storage is loading...</Box>
			</NativeBaseProvider>
		)
	}

	return (
		<NativeBaseProvider>
			<Home />
		</NativeBaseProvider>
	)
})

export default App
