import { FC, memo, useContext } from 'react'

import { LANGUAGE_SELECT_ITEMS } from '@app/constants'
import { ModalBottomListContent } from '@app/components'

import { SettingsFormContext } from '../../../../context'

export const ModalLanguageContent: FC = memo(() => {
	const { changeLanguageHandler, closeLanguageModal } =
		useContext(SettingsFormContext)

	return (
		<ModalBottomListContent
			items={LANGUAGE_SELECT_ITEMS}
			handler={changeLanguageHandler}
			close={closeLanguageModal}
		/>
	)
})
