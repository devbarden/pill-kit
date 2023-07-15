import { NativeBaseProvider } from 'native-base'
import { FC, memo } from 'react'

import './i18n'
import { Home } from './pages'

const App: FC = memo(() => (
	<NativeBaseProvider>
		<Home />
	</NativeBaseProvider>
))

export default App
