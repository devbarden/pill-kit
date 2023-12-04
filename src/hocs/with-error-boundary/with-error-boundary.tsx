import ErrorBoundary from 'react-native-error-boundary'
import { ComponentType } from 'react'

import { ErrorFallback } from '@app/components'

export const withErrorBoundary = (Component: ComponentType) => () => (
	<ErrorBoundary FallbackComponent={(props) => <ErrorFallback {...props} />}>
		<Component />
	</ErrorBoundary>
)
