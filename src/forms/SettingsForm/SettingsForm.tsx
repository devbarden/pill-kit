import { FC, memo } from 'react'

import { ScrollContent } from '@app/components'

import { useSettingsForm } from './hooks'
import { SettingsFormContext } from './context'
import { Modals, Fields } from './sub-components'

export const SettingsForm: FC = memo(() => {
	const state = useSettingsForm()

	return (
		<SettingsFormContext.Provider value={state}>
			<Modals />
			<ScrollContent>
				<Fields />
			</ScrollContent>
		</SettingsFormContext.Provider>
	)
})
