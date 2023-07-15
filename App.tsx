import { FC, memo } from 'react'
import { NativeBaseProvider } from 'native-base'

import { Home } from '@app/pages'
import '@app/i18n'

const App: FC = memo(() => (
	<NativeBaseProvider>
		<Home />
	</NativeBaseProvider>
))

export default App
