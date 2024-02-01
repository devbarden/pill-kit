import { FC, memo, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { Navigator } from '@app/navigator'

export const Initialization: FC = memo(() => {
	const { useInitMedicines, useInitConfiguration, useInitNotificationChannel } =
		useEndpoints()

	const { isLoading: isInitializingMedicines } = useInitMedicines()
	const { isLoading: isInitializingConfiguration } = useInitConfiguration()
	const { isLoading: isInitializingNotificationChannel } =
		useInitNotificationChannel()

	const isInitializing = useMemo(
		() =>
			isInitializingMedicines ||
			isInitializingConfiguration ||
			isInitializingNotificationChannel,
		[
			isInitializingMedicines,
			isInitializingConfiguration,
			isInitializingNotificationChannel,
		],
	)

	if (isInitializing) {
		return null
	}

	return <Navigator />
})
