import {
	useMedicinesEndpoints,
	useNotificationEndpoints,
	useConfigurationEndpoints,
} from './endpoints'

export const useEndpoints = () => {
	const medicinesEndpoints = useMedicinesEndpoints()
	const notificationEndpoints = useNotificationEndpoints()
	const configurationEndpoints = useConfigurationEndpoints()

	return {
		...medicinesEndpoints,
		...notificationEndpoints,
		...configurationEndpoints,
	}
}
