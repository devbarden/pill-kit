import {
	usePreloadEndpoints,
	useMedicinesEndpoints,
	useNotificationEndpoints,
	useConfigurationEndpoints,
} from './endpoints'

export const useEndpoints = () => {
	const preloadEndpoints = usePreloadEndpoints()
	const medicinesEndpoints = useMedicinesEndpoints()
	const notificationEndpoints = useNotificationEndpoints()
	const configurationEndpoints = useConfigurationEndpoints()

	return {
		...preloadEndpoints,
		...medicinesEndpoints,
		...notificationEndpoints,
		...configurationEndpoints,
	}
}
