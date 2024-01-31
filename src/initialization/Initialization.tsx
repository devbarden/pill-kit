import { FC, memo, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { Navigator } from '@app/navigator'

export const Initialization: FC = memo(() => {
	const { useInitMedicines, useInitConfiguration } = useEndpoints()

	const { isLoading: isInitializingMedicines } = useInitMedicines()
	const { isLoading: isInitializingConfiguration } = useInitConfiguration()

	const isInitializing = useMemo(
		() => isInitializingMedicines || isInitializingConfiguration,
		[isInitializingMedicines, isInitializingConfiguration],
	)

	if (isInitializing) {
		return null
	}

	return <Navigator />
})
