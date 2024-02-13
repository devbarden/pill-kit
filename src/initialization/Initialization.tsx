import { FC, memo, useMemo } from 'react'

import { useEndpoints } from '@app/hooks'
import { Navigator } from '@app/navigator'

export const Initialization: FC = memo(() => {
	const {
		useInitFonts,
		useInitMedicines,
		useInitConfiguration,
		useInitNotificationChannel,
	} = useEndpoints()

	const { isLoading: isInitializingFonts } = useInitFonts()
	const { isLoading: isInitializingMedicines } = useInitMedicines()
	const { isLoading: isInitializingConfiguration } = useInitConfiguration()
	const { isLoading: isInitializingNotificationChannel } =
		useInitNotificationChannel()

	const isInitializing = useMemo(
		() =>
			isInitializingFonts ||
			isInitializingMedicines ||
			isInitializingConfiguration ||
			isInitializingNotificationChannel,
		[
			isInitializingFonts,
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
