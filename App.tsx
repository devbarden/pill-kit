import { FC, memo } from 'react'
import { NativeBaseProvider } from 'native-base'
import { RootSiblingParent } from 'react-native-root-siblings'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@app/i18n'
import { registerLogs } from '@app/utils'
import { Navigator } from '@app/navigator'

registerLogs()

const queryClient = new QueryClient()

const App: FC = memo(() => (
	<QueryClientProvider client={queryClient}>
		<NativeBaseProvider>
			<RootSiblingParent>
				<Navigator />
			</RootSiblingParent>
		</NativeBaseProvider>
	</QueryClientProvider>
))

export default App
