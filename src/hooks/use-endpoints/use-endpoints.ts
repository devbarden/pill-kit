import { useMedicinesEndpoints, useConfigurationEndpoints } from './endpoints'

export const useEndpoints = () => {
	const medicinesEndpoints = useMedicinesEndpoints()
	const configurationEndpoints = useConfigurationEndpoints()

	return {
		...medicinesEndpoints,
		...configurationEndpoints,
	}
}
