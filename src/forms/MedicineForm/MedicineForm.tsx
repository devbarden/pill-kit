import { FC, Fragment, memo, useMemo } from 'react'

import { TypeMedicineFormProps } from '@app/types'
import { ScrollContent, ContentWrapper } from '@app/components'

import { useMedicineForm } from './hooks'
import { MedicineFormContext } from './context'
import { Modals, Header, Fields, Actions } from './sub-components'

export const MedicineForm: FC<TypeMedicineFormProps> = memo((props) => {
	const state = useMedicineForm(props)

	const { additionalActions } = useMemo(() => props, [props])

	// TODO: add label if user creating medicine in PAST or FUTURE

	return (
		<MedicineFormContext.Provider value={state}>
			<Modals />
			<Header />
			<ContentWrapper withHorizontalPaddings>
				<ScrollContent>
					<Fields />
					<Fragment>{additionalActions}</Fragment>
					<Actions />
				</ScrollContent>
			</ContentWrapper>
		</MedicineFormContext.Provider>
	)
})
