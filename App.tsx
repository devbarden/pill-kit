import { FC, memo } from 'react'
import { NativeBaseProvider } from 'native-base'
import { RootSiblingParent } from 'react-native-root-siblings'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@app/i18n'
import { Screen } from '@app/screen'
import { registerLogs } from '@app/utils'
import { SafeArea } from '@app/components'

const queryClient = new QueryClient()

registerLogs()

const App: FC = memo(() => (
	<SafeArea>
		<QueryClientProvider client={queryClient}>
			<NativeBaseProvider>
				<RootSiblingParent>
					<Screen />
				</RootSiblingParent>
			</NativeBaseProvider>
		</QueryClientProvider>
	</SafeArea>
))

export default App
