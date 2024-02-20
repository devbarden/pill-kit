import { FC, memo, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { Navigator } from '@app/navigator'

export const Initialization: FC = memo(() => {
	const { useInitFonts, useInitMedicines, useInitConfiguration } =
		useEndpoints()

	const { isLoading: isInitializingFonts } = useInitFonts()
	const { isLoading: isInitializingMedicines } = useInitMedicines()
	const { isLoading: isInitializingConfiguration } = useInitConfiguration()

	const isInitializing = useMemo(
		() =>
			isInitializingFonts ||
			isInitializingMedicines ||
			isInitializingConfiguration,
		[isInitializingFonts, isInitializingMedicines, isInitializingConfiguration],
	)

	if (isInitializing) {
		return null
	}

	return <Navigator />
})
