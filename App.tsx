import { FC, memo } from 'react'
import { NativeBaseProvider } from 'native-base'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@app/i18n'
import { registerLogs } from '@app/utils'
import { Main } from '@app/entry'

const queryClient = new QueryClient()

registerLogs()

const App: FC = memo(() => (
	<QueryClientProvider client={queryClient}>
		<NativeBaseProvider>
			<Main />
		</NativeBaseProvider>
	</QueryClientProvider>
))

export default App
