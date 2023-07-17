import { FC, memo } from 'react'
import { NativeBaseProvider } from 'native-base'

import '@app/i18n'
import { Loader } from '@app/components'
import { Navigator } from '@app/navigator'
import { useInitMedicines } from '@app/hooks'

const App: FC = memo(() => {
	const { isLoading } = useInitMedicines()

	return (
		<NativeBaseProvider>
			{isLoading ? <Loader /> : <Navigator />}
		</NativeBaseProvider>
	)
})

export default App
