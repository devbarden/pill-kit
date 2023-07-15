import { NativeBaseProvider } from 'native-base'
import { FC, memo } from 'react'

import '@app/i18n'
import { Home } from '@app/pages'

const App: FC = memo(() => (
	<NativeBaseProvider>
		<Home />
	</NativeBaseProvider>
))

export default App
