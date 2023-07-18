import { FC, memo } from 'react'

import '@app/i18n'
import { Loader } from '@app/components'
import { useEndpoints } from '@app/hooks'
import { Navigator } from '@app/navigator'

export const Main: FC = memo(() => {
	const { useInitMedicines } = useEndpoints()
	const { isLoading } = useInitMedicines()

	if (isLoading) {
		return <Loader />
	}

	return <Navigator />
})
