import { useMedicinesEndpoints } from './endpoints'

export const useEndpoints = () => {
	const medicinesEndpoints = useMedicinesEndpoints()

	return {
		...medicinesEndpoints,
	}
}
